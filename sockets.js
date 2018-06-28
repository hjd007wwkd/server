var socketIO = require('socket.io'),
    uuid = require('node-uuid'),
    crypto = require('crypto');

clients = {}

module.exports = function (server, config, knex) {
    var io = socketIO.listen(server);

    io.sockets.on('connection', function (client) {
        client.resources = {
            screen: false,
            video: true,
            audio: false
        };

        client.on('addMsg', function (msg){
            knex('messages').insert({content: msg.message.content, user_id: msg.userId, room_id: msg.roomId}).then(function(){
                console.log('success')
            })
            client.to(client.room).emit('message', {type: 'addMsg', message: msg})
        })

        client.on('setUsername', function (data){
            client.username = data
            if(!clients[client.room]){
                clients[client.room] = []
            }
            clients[client.room].push(client.username);
            io.in(client.room).emit('message', {type: 'addPeerInfo', peers: clients[client.room]})
        })

        // pass a message to another id
        client.on('message', function (details) {
            if (!details) return;

            var otherClient = io.to(details.to);
            if (!otherClient) return;

            details.from = client.id;
            otherClient.emit('message', details);
        });

        client.on('shareScreen', function () {
            client.resources.screen = true;
        });

        client.on('unshareScreen', function (type) {
            client.resources.screen = false;
            removeFeed('screen');
        });

        client.on('join', join);

        function removeFeed(type) {
            if (client.room) {
                io.sockets.in(client.room).emit('remove', {
                    id: client.id,
                    type: type
                });
                if (!type) {
                    client.leave(client.room);
                    client.room = undefined;
                    client.username = undefined;
                }
            }
        }

        function join(name, cb) {
            // sanity check
            if (typeof name !== 'string') return;
            // check if maximum number of clients reached
            if (config.rooms && config.rooms.maxClients > 0 &&
                clientsInRoom(name) >= config.rooms.maxClients) {
                safeCb(cb)('full');
                return;
            }
            // leave any existing rooms
            removeFeed();
            safeCb(cb)(null, describeRoom(name));
            client.join(name);
            client.room = name;

            knex('messages').join('users', 'messages.user_id', 'users.id').join('rooms', 'messages.room_id', 'rooms.id')
            .select('messages.content', 'messages.created_at', 'users.username', 'rooms.name', 'rooms.id').where('rooms.name', name).then(function(rows) {
                client.emit('message', {type: 'initMsg', payload: {messages: rows, room: {roomname: rows[0].name, roomId: rows[0].id}}});
            })
        }

        function siginalLost() {
            if(client.username && clients[client.room]) {
                const index = clients[client.room].indexOf(client.username);
                if (index > -1) {
                  clients[client.room].splice(index, 1);
                }
                io.in(client.room).emit('message', {type: 'removePeerInfo', peers: clients[client.room]})
            }
        }

        // we don't want to pass "leave" directly because the
        // event type string of "socket end" gets passed too.
        client.on('disconnect', function () {
            siginalLost()
            removeFeed();
        });
        client.on('leave', function () {
            siginalLost()
            removeFeed();
        });

        client.on('create', function (name, cb) {
            if (arguments.length == 2) {
                cb = (typeof cb == 'function') ? cb : function () {};
                name = name || uuid();
            } else {
                cb = name;
                name = uuid();
            }
            // check if exists
            var room = io.nsps['/'].adapter.rooms[name];
            if (room && room.length) {
                safeCb(cb)('taken');
            } else {
                join(name);
                safeCb(cb)(null, name);
            }
        });

        // support for logging full webrtc traces to stdout
        // useful for large-scale error monitoring
        client.on('trace', function (data) {
            console.log('trace', JSON.stringify(
            [data.type, data.session, data.prefix, data.peer, data.time, data.value]
            ));
        });


        // tell client about stun and turn servers and generate nonces
        client.emit('stunservers', config.stunservers || []);

        // create shared secret nonces for TURN authentication
        // the process is described in draft-uberti-behave-turn-rest
        var credentials = [];
        // allow selectively vending turn credentials based on origin.
        var origin = client.handshake.headers.origin;
        if (!config.turnorigins || config.turnorigins.indexOf(origin) !== -1) {
            config.turnservers.forEach(function (server) {
                var hmac = crypto.createHmac('sha1', server.secret);
                // default to 86400 seconds timeout unless specified
                var username = Math.floor(new Date().getTime() / 1000) + (parseInt(server.expiry || 86400, 10)) + "";
                hmac.update(username);
                credentials.push({
                    username: username,
                    credential: hmac.digest('base64'),
                    urls: server.urls || server.url
                });
            });
        }
        client.emit('turnservers', credentials);
    });


    function describeRoom(name) {
        var adapter = io.nsps['/'].adapter;
        var clients = adapter.rooms[name] || {};
        var result = {
            clients: {}
        };
        Object.keys(clients).forEach(function (id) {
            result.clients[id] = adapter.nsp.connected[id].resources;
        });
        return result;
    }

    function clientsInRoom(name) {
        return io.sockets.clients(name).length;
    }

};

function safeCb(cb) {
    if (typeof cb === 'function') {
        return cb;
    } else {
        return function () {};
    }
}
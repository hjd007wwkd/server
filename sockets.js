const socketIO = require('socket.io'),
    uuid = require('node-uuid'),
    crypto = require('crypto'),
    toonavatar = require('cartoon-avatar');

const clientList = {
    Bob2030: {username: 'Bob2030', avatar: toonavatar.generate_avatar(), like: 3, userList: []},
    Cool531: {username: 'Cool531', avatar: toonavatar.generate_avatar(), like: 5, userList: []},
    Kihun50: {username: 'Kihun50', avatar: toonavatar.generate_avatar(), like: 9, userList: []},
    Tool030: {username: 'Tool030', avatar: toonavatar.generate_avatar(), like: 10, userList: []},
    Gab1230: {username: 'Gab1230', avatar: toonavatar.generate_avatar(), like: 3, userList: []},
    Vna13: {username: 'Vna13', avatar: toonavatar.generate_avatar(), like: 0, userList: []},
    Bnn043: {username: 'Bnn043', avatar: toonavatar.generate_avatar(), like: 7, userList: []},
    Hunn45: {username: 'Hunn45', avatar: toonavatar.generate_avatar(), like: 1, userList: []},
    Yisan: {username: 'Yisan', avatar: toonavatar.generate_avatar(), like: 0, userList: []},
    Jarn00: {username: 'Jarn00', avatar: toonavatar.generate_avatar(), like: 2, userList: []},
    Hanna00: {username: 'Hanna00', avatar: toonavatar.generate_avatar(), like: 4, userList: []},
    Koooo: {username: 'Koooo', avatar: toonavatar.generate_avatar(), like: 5, userList: []},
    Talan: {username: 'Talan', avatar: toonavatar.generate_avatar(), like: 2, userList: []},
    Ghann: {username: 'Ghann', avatar: toonavatar.generate_avatar(), like: 0, userList: []},
    Jimm09: {username: 'Jimm09', avatar: toonavatar.generate_avatar(), like: 8, userList: []},
    Nmmm453: {username: 'Nmmm453', avatar: toonavatar.generate_avatar(), like: 3, userList: []},
    Jkcc836: {username: 'Jkcc836', avatar: toonavatar.generate_avatar(), like: 6, userList: []},
    Cvx3834: {username: 'Cvx3834', avatar: toonavatar.generate_avatar(), like: 1, userList: []},
    Jiop0000: {username: 'Jiop0000', avatar: toonavatar.generate_avatar(), like: 1, userList: []},
    Zsda9483: {username: 'Zsda9483', avatar: toonavatar.generate_avatar(), like: 0, userList: []}
}


const clients = {
    33: {
        Koooo: clientList.Koooo,
        Tool030: clientList.Tool030,
        Bob2030: clientList.Bob2030,
        Cool531: clientList.Cool531,
        Ghann: clientList.Ghann,
        Zsda9483: clientList.Zsda9483,
        Talan: clientList.Talan,
        Vna13: clientList.Vna13,
        Zsda9483: clientList.Zsda9483,
        Nmmm453: clientList.Nmmm453,
        Cvx3834: clientList.Cvx3834,
        Jiop0000: clientList.Jiop0000
    },
    36: {
        Jarn00: clientList.Jarn00,
        Cool531: clientList.Cool531,
        Hanna00: clientList.Hanna00,
        Tool030: clientList.Tool030,
        Koooo: clientList.Koooo,
        Vna13: clientList.Vna13,
        Talan: clientList.Talan,
        Ghann: clientList.Ghann,
        Jimm09: clientList.Jimm09,
        Nmmm453: clientList.Nmmm453,
        Yisan: clientList.Yisan,
        Bnn043: clientList.Bnn043
    },
    30: {
        Jarn00: clientList.Jarn00,
        Jkcc836: clientList.Jkcc836,
        Hanna00: clientList.Hanna00,
        Cvx3834: clientList.Cvx3834,
        Koooo: clientList.Koooo,
        Jiop0000: clientList.Jiop0000,
        Talan: clientList.Talan,
        Ghann: clientList.Ghann,
        Zsda9483: clientList.Zsda9483,
        Nmmm453: clientList.Nmmm453
    },
    39: {
        Bob2030: clientList.Bob2030,
        Cool531: clientList.Cool531,
        Kihun50: clientList.Kihun50,
        Tool030: clientList.Tool030,
        Gab1230: clientList.Gab1230,
        Vna13: clientList.Vna13,
        Bnn043: clientList.Bnn043,
        Hunn45: clientList.Hunn45,
        Yisan: clientList.Yisan,
        Nmmm453: clientList.Nmmm453,
        Jimm09: clientList.Jimm09,
        Jarn00: clientList.Jarn00,
        Hanna00: clientList.Hanna00,
        Zsda9483: clientList.Zsda9483,
        Ghann: clientList.Ghann,
        Talan: clientList.Talan,
        Koooo: clientList.Koooo,
        Jkcc836: clientList.Jkcc836,
        Cvx3834: clientList.Cvx3834,
        Jiop0000: clientList.Jiop0000
    },
    35: {
        Vna13: clientList.Vna13,
        Hanna00: clientList.Hanna00,
        Zsda9483: clientList.Zsda9483,
        Kihun50: clientList.Kihun50,
        Ghann: clientList.Ghann,
        Cvx3834: clientList.Cvx3834,
        Talan: clientList.Talan,
        Yisan: clientList.Yisan,
        Jimm09: clientList.Jimm09,
        Nmmm453: clientList.Nmmm453
    },
    6: {
        Ghann: clientList.Ghann,
        Cvx3834: clientList.Cvx3834,
        Talan: clientList.Talan,
        Yisan: clientList.Yisan,
        Jimm09: clientList.Jimm09,
        Nmmm453: clientList.Nmmm453
    },
    7: {
        Vna13: clientList.Vna13,
        Hanna00: clientList.Hanna00,
        Zsda9483: clientList.Zsda9483,
        Kihun50: clientList.Kihun50,
        Ghann: clientList.Ghann,
        Cvx3834: clientList.Cvx3834,
        Talan: clientList.Talan
    },
    12: {
        Koooo: clientList.Koooo,
        Tool030: clientList.Tool030,
        Bob2030: clientList.Bob2030,
        Cool531: clientList.Cool531,
        Ghann: clientList.Ghann,
        Zsda9483: clientList.Zsda9483
    },
    32: {
        Ghann: clientList.Ghann,
        Jimm09: clientList.Jimm09,
        Nmmm453: clientList.Nmmm453
    },
    28: {
        Gab1230: clientList.Gab1230,
        Vna13: clientList.Vna13,
        Bnn043: clientList.Bnn043,
        Hunn45: clientList.Hunn45,
        Yisan: clientList.Yisan,
        Jarn00: clientList.Jarn00
    },
    39: {
        Bob2030: clientList.Bob2030,
        Cool531: clientList.Cool531,
        Kihun50: clientList.Kihun50,
        Tool030: clientList.Tool030
    },
    11: {
        Talan: clientList.Talan,
        Ghann: clientList.Ghann,
        Jimm09: clientList.Jimm09,
        Nmmm453: clientList.Nmmm453
    },
    13: {
        Bob2030: clientList.Bob2030,
        Cool531: clientList.Cool531,
        Kihun50: clientList.Kihun50,
        Tool030: clientList.Tool030,
        Gab1230: clientList.Gab1230,
        Vna13: clientList.Vna13,
        Bnn043: clientList.Bnn043
    },
    22: {
        Ghann: clientList.Ghann,
        Cvx3834: clientList.Cvx3834,
        Talan: clientList.Talan
    },
    31: {
        Ghann: clientList.Ghann,
        Zsda9483: clientList.Zsda9483
    },
    19: {
        Ghann: clientList.Ghann,
        Zsda9483: clientList.Zsda9483,
        Talan: clientList.Talan,
        Vna13: clientList.Vna13,
        Zsda9483: clientList.Zsda9483
    },
    38: {
        Gab1230: clientList.Gab1230,
        Vna13: clientList.Vna13,
        Bnn043: clientList.Bnn043
    },
    25: {
        Bob2030: clientList.Bob2030,
        Cool531: clientList.Cool531,
        Kihun50: clientList.Kihun50,
        Tool030: clientList.Tool030,
        Gab1230: clientList.Gab1230
    },
    8: {
        Jimm09: clientList.Jimm09,
        Nmmm453: clientList.Nmmm453
    }

};
const activeClients = {};

module.exports = function (server, config, knex) {
    const io = socketIO.listen(server);

    io.sockets.on('connection', function (client) {
        client.resources = {
            screen: false,
            video: true,
            audio: false
        };

        knex('rooms').join('users', 'users.id', 'rooms.user_id')
        .select({roomID: 'rooms.id'}, {title: 'rooms.title'}, {image: 'rooms.image'},
          {date: 'rooms.date'}, {site: 'rooms.site'}, {tags: 'rooms.tags'},
          {description: 'rooms.contenttext'}, {url: 'rooms.url'},
          {username: 'users.username'}, {avatar: 'users.avatar'})
            .then(function(rows){
            client.emit('getRooms', rows.map((item) => {
              const online = clients[item.roomID] ? Object.keys(clients[item.roomID]).length : 0
              return {
                roomID: item.roomID,
                title: item.title,
                image: item.image,
                date: item.date,
                site: item.site,
                tags: item.tags,
                description: item.description,
                url: item.url,
                owner: {
                  username: item.username,
                  avatar: item.avatar
                },
                usersOnline: online
              }
            })
          )
        })

        client.on('register', function(username, email, password) {
            const avatar = toonavatar.generate_avatar();
            knex('users').select('email', 'username').where('email', email).orWhere('username', username).then(function(row){
                if(row.length > 0) {
                    client.emit('fail', 'Email or Username already exists');
                } else {
                    knex('users').insert({username: username, email: email, password: password, avatar: avatar}).then(function(){
                        client.emit('success', username, avatar);
                    })
                }
            })
        })

        client.on('login', function(email, password) {
            knex('users').select('email', 'username', 'password', 'avatar').where('email', email).then(function(row){
                if(row.length > 0) {
                    if(row[0].password.toString() === password.toString()) {
                        client.emit('success', row[0].username, row[0].avatar);
                    } else {
                        client.emit('fail', 'Incorrect Password');
                    }
                } else {
                    client.emit('fail', 'Email does not exist');
                }
            })
        })

        client.on('typing', function(data) {
            client.to(client.room).emit('message', {type: 'typing', peer: data})
        })

        client.on('createRoom', function(title, image, url, site, date, tags, contenthtml, contenttext, username) {
            knex('users').select('id').where('username', username).then(function(user) {
                knex('rooms').insert({title: title, image: image, url: url, site: site, date: date, tags: tags, contenthtml: contenthtml, contenttext:contenttext, user_id: user[0].id}).returning('*').then(function(data){
                    client.emit('roomCreated', data);
                })
            })
        })

        client.on('addMsg', function (msg){
            knex('users').select('id').where('username', msg.username).then(function(row){
              knex('messages').insert({content: msg.message.content, user_id: row[0].id, room_id: msg.roomId}).then(function(){
                console.log('success')
              })
            })
            client.to(client.room).emit('message', {type: 'addMsg', message: msg})
        })

        client.on('setUsername', function (username, avatar){
            client.username = username
            client.avatar = avatar
            if(!clients[client.room]){
                clients[client.room] = {}
            }

            clients[client.room][client.username] = {username: client.username, avatar: client.avatar, like: 0, userList: []};
            io.in(client.room).emit('message', {type: 'addPeerInfo', peers: clients[client.room]})
        })

        client.on('like', function(username){
            if(clients[client.room][username].userList.includes(client.username)){
                const index = clients[client.room][username].userList.indexOf(client.username);
                clients[client.room][username].userList.splice(index, 1);
                clients[client.room][username].like -= 1;
                io.in(client.room).emit('message', {type: 'addPeerInfo', peers: clients[client.room]})
            } else {
                clients[client.room][username].like += 1;
                clients[client.room][username].userList.push(client.username)
                io.in(client.room).emit('message', {type: 'addPeerInfo', peers: clients[client.room]})
            }
        })

        client.on('banned', function(userId){
            client.to(userId).emit('message', {type: 'addBanned', peers: userId})
        })

        client.on('activeUser', function(){
            if(!activeClients[client.room]){
                activeClients[client.room] = {}
            }
            activeClients[client.room][client.id] = {id: client.id, username: client.username};
            client.to(client.room).emit('message', {type: 'active', peers: activeClients[client.room]})
        })

        client.on('disabledUser', function(){
            delete activeClients[client.room][client.id];
            client.to(client.room).emit('message', {type: 'active', peers: activeClients[client.room]})
        })

        // pass a message to another id
        client.on('message', function (details) {
            if (!details) return;

            const otherClient = io.to(details.to);
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
                }
            }
        }

        function join(roomId, cb) {
            // sanity check
            if (typeof roomId !== 'string') return;
            // check if maximum number of clients reached
            if (config.rooms && config.rooms.maxClients > 0 &&
                clientsInRoom(roomId) >= config.rooms.maxClients) {
                safeCb(cb)('full');
                return;
            }
            // leave any existing rooms
            removeFeed();
            safeCb(cb)(null, describeRoom(roomId));

            client.join(roomId);
            client.room = roomId;
            if(!activeClients[client.room]){
                activeClients[client.room] = {}
            }
            client.emit('message', {type: 'active', peers: activeClients[client.room]})

            knex('messages').join('users', 'messages.user_id', 'users.id').join('rooms', 'messages.room_id', 'rooms.id')
            .select('messages.content', 'messages.created_at', 'users.username', 'users.avatar').where('rooms.id', roomId).orderBy('messages.created_at').then(function(rows) {
                client.emit('message', {type: 'initMsg', messages: rows});
            })

            knex('rooms').select({roomID: 'rooms.id'}, {title: 'rooms.title'}, {image: 'rooms.image'},
                {date: 'rooms.date'}, {site: 'rooms.site'}, {tags: 'rooms.tags'},
                {description: 'rooms.contenttext'}, {url: 'rooms.url'}, {content: 'rooms.contenthtml'}).where('rooms.id', roomId)
                .then(function(rows){
                    client.emit('message', {type: 'addArticle' , article: rows.map((item) => {
                      return {
                        roomID: item.roomID,
                        title: item.title,
                        image: item.image,
                        date: item.date,
                        site: item.site,
                        tags: item.tags,
                        description: item.description,
                        content: item.content,
                        url: item.url
                      }
                    })}
                )
            })
        }

        function siginalLost() {
            if(client.username && clients[client.room]) {
                delete clients[client.room][client.username];
                io.in(client.room).emit('message', {type: 'removePeerInfo', peers: clients[client.room]})
            }
        }

        // we don't want to pass "leave" directly because the
        // event type string of "socket end" gets passed too.
        client.on('disconnect', function () {
            if(!activeClients[client.room]){
                activeClients[client.room] = {}
            }
            if(activeClients[client.room][client.id]) {
                delete activeClients[client.room][client.id];
                client.to(client.room).emit('message', {type: 'active', peers: activeClients[client.room]})
            }
            siginalLost();
            removeFeed();
        });
        client.on('leave', function () {
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
            const room = io.nsps['/'].adapter.rooms[name];
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
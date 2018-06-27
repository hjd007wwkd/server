const express = require('express');
const app = express();
var sockets = require('./sockets');
const PORT = process.env.PORT || 8888;
const IP = process.env.IP || '0.0.0.0';
var knex = require('knex');

var confing = {
  "isDev": true,
  "server": {
    "port": process.env.PORT || 8888,
    "/* secure */": "/* whether this connects via https */",
    "secure": false,
    "key": null,
    "cert": null,
    "password": null
  },
  "rooms": {
    "/* maxClients */": "/* maximum number of clients per room. 0 = no limit */",
    "maxClients": 0
  },
  "stunservers": [
    {
      "urls": "stun:stun.l.google.com:19302"
    }
  ],
  "turnservers": [
    {
      "urls": ["turn:your.turn.servers.here"],
      "secret": "turnserversharedsecret",
      "expiry": 86400
    }
  ]
}

app.use(express.static(__dirname+"/public"));

var server = app.listen(PORT, IP, function(){
    console.log(`app listening on port ${PORT}!`);
});

sockets(server, config, knex)
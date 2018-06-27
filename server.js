const express = require('express');
const app = express();
var sockets = require('./sockets');
var config = require('getconfig')
const PORT = process.env.PORT || 8888;
const IP = process.env.IP || '0.0.0.0';
var knex = require('knex');

app.use(express.static(__dirname+"/public"));

var server = app.listen(PORT, IP, function(){
    console.log(`app listening on port ${PORT}!`);
});

sockets(server, config, knex)
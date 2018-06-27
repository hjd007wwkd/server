const express = require('express');
const app = express();
var sockets = require('./sockets');
var config = require('getconfig')
const PORT = process.env.PORT || 8888;
const IP = process.env.IP || '0.0.0.0';
var knex = require('knex')({
    client: 'postgresql',
    connection: {
        host: 'postgres://kkisdnelugakuz:b2aa7c36f3d3ee6431332ba99ad35260f7399115aad77f4ab66b29a887bb7dd5@ec2-23-23-220-19.compute-1.amazonaws.com:5432/dbl1n6a8vhi4ji',
        user : 'dbl1n6a8vhi4ji',
        password : 'kkisdnelugakuz',
        database : 'b2aa7c36f3d3ee6431332ba99ad35260f7399115aad77f4ab66b29a887bb7dd5'
    },
    migrations: {
        tableName: 'knex_migrations'
    }
});

app.use(express.static(__dirname+"/public"));

var server = app.listen(PORT, IP, function(){
    console.log(`app listening on port ${PORT}!`);
});

sockets(server, config, knex)
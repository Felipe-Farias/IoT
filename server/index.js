// WEB SERVER
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {

});


io.on('connection', (socket) => {

});

app.use(express.static(__dirname + '/public'));
http.listen(3000);

// SERIAL COMUNICATION 
const Serialport = require("serialport");
const { Socket } = require('dgram');
const { waitForDebugger } = require('inspector');
const { isObject } = require('util');
const Readline = Serialport.parsers.Readline;

const port = new Serialport('COM5', {
    baudRate: 9600
});

const parser = port.pipe(new Readline({
    delimiter: '\r\n'
}));

parser.on('open', function () {
    console.log('connection is opened');
});

parser.on('data', function (data) {
    console.log(data);
    io.emit('humo', data)
});

port.on('error', function(err){
    console.log(err);
});
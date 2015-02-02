var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var gameIO = io.of('/game');
var gameMechanics = require('./GameMechanics');


io.on('connection', function(socket) {
	console.log('a user connected');

	socket.on('disconnect', function() {
    	console.log('user disconnected');
	});

	socket.emit('newPosition', {'x' : 1});
});

gameIO.on('connection', function(socket) {
	gameMechanics.handleConnection(socket);
});


app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>');
});

var port = 80;

http.listen(port, function() {
	console.log('listening on ', port);
});	

module.exports = io;
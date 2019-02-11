var app  = require ('express')();
var http = require('http').Server(app);
var fs = require('fs');
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log("Socket connected.");
});

fs.watchFile('index.html', function(curr,prev) {
	console.log('file change detected');
	io.emit('fileChanged', 'file has been changed.');
});

http.listen(3000, function() {
	console.log('incoming transmission on *:3000');
});

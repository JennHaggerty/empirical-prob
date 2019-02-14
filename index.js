var { app } = require('./app');
var http = require('http').Server(app);
var fs = require('fs');
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	console.log("Socket connected.");
});

fs.watchFile('public/index.html', function(curr,prev) {
	console.log('file change detected');
	io.emit('fileChanged', 'file has been changed.');
});

http.listen(3000, function() {
	console.log('incoming transmission on *:3000');
});

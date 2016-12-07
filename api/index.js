var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('client connected');
    socket.on('play', function (sound_name) {
        console.log('play: ' + sound_name);
        socket.broadcast.emit('play-sound', sound_name);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
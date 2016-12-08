var path = require('path');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dest/dj-player.html'))
});

app.get('/controller', function (req, res) {
    res.sendFile(path.join(__dirname, '../dest/remote-controller.html'))
});

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
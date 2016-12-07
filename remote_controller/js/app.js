var $ = require('jquery');
var io = require('socket.io-client');

var socket = io('http://127.0.0.1');

$('.js-play').on('click', function () {
    socket.emit('play', 'bitcoin');
});

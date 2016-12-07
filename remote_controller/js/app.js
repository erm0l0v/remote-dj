var $ = require('jquery');
var io = require('socket.io-client');

var socket = io('http://ec2-54-169-242-142.ap-southeast-1.compute.amazonaws.com');

$('.js-play').on('click', function () {
    socket.emit('play', 'bitcoin');
});

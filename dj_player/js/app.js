var io = require('socket.io-client');
var Howl = require('howler').Howl;

var bitcoin_url = require('./Mario-coin-sound.mp3');

var socket = io('http://ec2-54-169-242-142.ap-southeast-1.compute.amazonaws.com');

var sounds = {
    'bitcoin': new Howl({
        src: [bitcoin_url]
    })
};

socket.on('play-sound', function (sound_name) {
    if (sounds.hasOwnProperty(sound_name)) {
        sounds[sound_name].play();
    }
});
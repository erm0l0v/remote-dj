var io = require('socket.io-client');
var Howl = require('howler').Howl;

var bitcoin_url = require('./Mario-coin-sound.mp3');

var socket = io('http://127.0.0.1');

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
var path = require('path');

var src = __dirname,
    dest = path.join(__dirname, '/dest');

module.exports = {
    context: src,
    entry: {
        'remote-controller': './remote_controller/js/app.js',
        'dj-player': './dj_player/js/app.js'
    },
    output: {
        path: dest,
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.mp3$/, loader: 'url?limit=100000' }
        ]
    }
};

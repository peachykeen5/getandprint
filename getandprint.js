function getAndPrintHTMLChunks() {
    var https = require('https');
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };
    
    https.get(requestOptions, function (stream) {
        stream.setEncoding('utf8');
        stream.on('data', function (data) {
            console.log('Chunk received', data, +'\n');
        });
        return https;
    });

};
console.log(getAndPrintHTMLChunks());
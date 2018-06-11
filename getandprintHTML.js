function getAndPrintHTML() {

    var https = require('https');
    var pie = ("");

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };
    https.get(requestOptions, function (stream) {
        stream.setEncoding('utf8');
        stream.on('data', function (data) {
            pie += data;
            console.log(pie);
        });
        stream.on('end', function () {
            console.log("stream has ended")
        })

    })
}

getAndPrintHTML()
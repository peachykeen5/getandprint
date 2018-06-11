var https = require('https');
var pie = "";

    function getAndPrintHTML(options) {

        https.get(options, function (stream) {
            stream.setEncoding('utf8');
            stream.on('data', function (data) {
                pie += data;
                console.log(pie);
            });
        })

    }
getAndPrintHTML({
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
});
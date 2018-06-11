var https = require('https');
var pie = "";

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};


function getAndPrintHTML(options, callback) {
    var pie = "";
    https.get(options, function (stream) {
        stream.setEncoding('utf8');
        stream.on('data', function (data) {
            pie += data;
            console.log(pie);
        });
        stream.on('end', function() {
            console.log("stream has ended")
            callback(pie);
        })
    })

}
function printHTML(html) {
    console.log(html);
}

getAndPrintHTML(requestOptions, printHTML)

var https = require('https');

module.exports = function getHTML(options, callback) {
    var pie = "";
    https.get(options, function (stream) {
        stream.setEncoding('utf8');
        stream.on('data', function (data) {
            pie += data;
            console.log(pie);
        });
        stream.on('end', function () {
            console.log("stream has ended")
            callback(pie);
        })
    })
};




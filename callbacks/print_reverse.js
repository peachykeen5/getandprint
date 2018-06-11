var getHTML = require('../http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};

function printUpperCase(html) {
    function reverseString(html) {
        console.log(html);
        return html;
    }

}

getHTML(requestOptions, printUpperCase);
console.log("server starting...");

// pull in the http server mod
const HTTP = require('http');

//URL and query mods
const url = require('url');
const QUERY = require('querystring');
const HTML_HANDLER = require('./htmlResponses.js');

const PORT = process.env.PORT || process.env.NODE_PORT || 3000;


const URL_STRUCT = {
    '/': HTML_HANDLER.getLandingResponse,
    //notFound : HTML_HANDLER.get404Response,
}

const onRequest = (request, response) => {
    let baseURL = 'http://' + request.headers.host + '/';
    const PARSED_URL = new URL(request.url, baseURL);    //might need base url for this
    let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
    acceptedTypes = acceptedTypes || [];

    const HTTPMETHOD = request.method;
    const PARAMS = QUERY.parse(PARSED_URL.query);

    if (URL_STRUCT[PARSED_URL.pathname]) {
        URL_STRUCT[PARSED_URL.pathname](request, response, PARAMS, acceptedTypes, HTTPMETHOD);
    } /*else {
        URL_STRUCT.notFound(request, response, PARAMS);
    }*/
}

HTTP.createServer(onRequest).listen(PORT);

console.log(`Listening on 98.11.194.129: ${PORT}`);
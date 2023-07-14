const fs = require('fs');

const homePage = fs.readFileSync(`${__dirname}/../client/index.html`);

const getLandingResponse = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(homePage);
    response.end();
}


module.exports = {
    getLandingResponse,
}
const http = require('http');
const urlParser = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.on('request', (req, res) => {

    const { pathname, query: { name } } = urlParser.parse(req.url, true);

    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;

    switch (pathname) {
        case '/hello':
            res.end(name ? `Hello, ${name}` : `Hello, world`)
            break;
        case '/goodbye':
            res.end(name ? `Goodbye, ${name}` : `Goodbye`)
            break;
        default:
            res.statusCode = 404;
            res.end('Not Found');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

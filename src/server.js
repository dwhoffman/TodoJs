var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log('Request -> URL: %s  METHOD: %s', req.url, req.method);
    var response = {'result': 'hello world'};
    console.log('Sending Response -> %s', JSON.stringify(response));
    res.write(JSON.stringify(response));
    res.end();
}).listen(process.env.PORT);
console.log('Server running on port %d', process.env.PORT);
const http = require('http');
const hostName = 'localhost'
const port = 8000
const url = require('url');
const additions = require('./addition');

const createServer = http.createServer((req,res) =>{

    const pathUrl = url.parse(req.url, true);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain')
    res.write(`La suma de los numeros es ${additions.sumatoria(pathUrl.query.num1, pathUrl.query.num2)}`)
});

createServer.listen(port, hostName, ()=>{

    console.log(`Server running at http://${hostName}:${port}`)
});
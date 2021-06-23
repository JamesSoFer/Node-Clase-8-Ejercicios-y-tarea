
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.write('Hello World!')
    res.end()

})

server.listen(5000)
console.log('Node.js is listening on port 5000')

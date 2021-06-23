const http = require('http')
const url = require('url')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    const pathUrl = url.parse(req.url, true)
    console.log('Mi nombre es' ,pathUrl.query.nombre)

    res.statusCode = 200
    res.setHeader('Content-type','text/plain')
    // res.write('Hello World!')
    res.end(`Hola ${pathUrl.query.nombre}`)

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})

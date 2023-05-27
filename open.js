const http = require("http")
const { readFileSync } = require('fs')


const Html = readFileSync('./WEBSITE.html')
const Css = readFileSync('./WEB.css')
const JsFile = readFileSync('./WEB.js')
const Image = readFileSync('./moon.png')


const server = http.createServer((req, res) => {
    const url  = req.url
    console.log(req.method)
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(Html)
        res.end()
    }


    else if (url === '/WEB.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(Css)
        res.end()
    }

    else if (url === '/WEB.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(JsFile)
        res.end()
    }
    else if (url === '/moon.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(Image)
        res.end()
    }


   res.end()
})

server.listen(4000)
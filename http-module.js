const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to my first website!!!')
    }
    if (req.url === '/about') {
        res.write('This is my history')
    }
    res.write(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href = "/">back to home</a>
    `)
})

server.listen(5000)
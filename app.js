const http = require('http');
const fs = require('fs');  

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404).write('Error: File Not Found') 
        } else {
            res.write(data)
        }
        res.end()
    })
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    })
    
    const url = req.url
    if (url == '/about') {
        renderHTML('./about.html', res)
    } else if(url == '/kontak') {
        res.write('Ini Halaman kontak')
        res.end()
    } else {
        renderHTML('./index.html', res)
    }

})

const port = 3000
server.listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
})
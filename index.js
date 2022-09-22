var http = require('http')

const server = http.createServer(function(req, res){
    console.log(req,'server is running')
})

server.listen(8080)
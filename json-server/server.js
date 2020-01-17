const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'rosegoldnails.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({ '/api/*': '/$1' }))

server.use(jsonServer.bodyParser)

server.use(function (req, res, next) {
    if (req.method === 'POST') {
        // Converts POST to GET and move payload to query params
        // This way it will make JSON Server that it's GET request
        req.method = 'GET'
        req.query = req.body
    }
    // Continue to JSON Server router
    next()
})

server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})

const express = require('express')
const helmet = require('helmet')

const server = express()
const port = 9000

server.use(helmet())
server.use(express.json())



server.listen(port, () => console.log(`\n===Listening on ${port}===\n`))
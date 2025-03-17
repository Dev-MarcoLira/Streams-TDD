import express from 'express'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) =>{

    res.end('ok')

})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
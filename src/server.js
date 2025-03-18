import express from 'express'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
export const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

const VALID = {
    name: 'Marco Antonio',
    password: '180df50415967b23131f' // openssl rand -hex 10
}


server.get('/', (req, res) =>{

    res.send({ message: 'ok' })

})

server.post('/register', (req, res) =>{
    const { name, password } = req.body
    if(!name || !password){
        res
            .status(404)
            .send({ error: 'user or password is invalid'})
    }else{

        res.send({ message: 'ok' })
    }

})

server.post('/login', (req, res) =>{

    const { name, password } = req.body
    if(name !== VALID.name || password !== VALID.password){
        res
            .status(404)
            .send({ error: 'user or password is invalid'})
    }else{
        res.send({ message: 'logged in' })
    }

})

server.get('/stream', (req, res) =>{
    res.send({ message: 'streamed content'} )
})

if(import.meta.url === `file://${process.cwd()}/server.js`){
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}else{
    server.listen(process.env.PORT_TEST, () => console.log(`Server running on port ${PORT}`))
}
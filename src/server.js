import express from 'express'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

const VALID = {
    name: 'Marco Antonio',
    password: '180df50415967b23131f' // openssl rand -hex 10
}


server.get('/', (req, res) =>{

    res.send('ok')

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

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
import express from "express";
import UserRepository from '../repository/UserRepository.js'
import path from "node:path";
import { fileURLToPath } from 'url';

const VALID = {
    name: 'Marco Antonio',
    password: '180df50415967b23131f' // openssl rand -hex 10
}


const router = express.Router()

router.post('/register', (req, res) =>{
    const { name, password } = req.body
    if(!name || !password){
        res
            .status(404)
            .send({ error: 'user or password is invalid'})
    }else{

        res.status(201).send({ message: 'ok' })
    }

})

router.post('/login', (req, res) =>{

    const { name, password } = req.body
    if(name !== VALID.name || password !== VALID.password){
        res
            .status(404)
            .send({ error: 'user or password is invalid'})
    }else{
        res.send({ message: 'logged in' })
    }

})

router.get('/users/all', (req, res) =>{
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileStream = UserRepository.streamAll(path.join(__dirname, '..', 'database', 'MOCK_DATA.json'))

    res.setHeader('Content-Type', 'application/json')
    fileStream.pipe(res)

    fileStream.on('error', (err) => {

        console.log(`Error streaming the file: ${err}`)
        res.status(500).send({ error: 'Internal Server Error' })

    })

    res.on('close', () =>{
        fileStream.destroy()
    })

    // Log to verify the stream starts (optional)
    fileStream.on('data', (chunk) => {
        console.log('Streaming data chunk...');
    });

})

export default router
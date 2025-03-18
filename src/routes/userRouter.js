import express from "express";
import UserRepository from '../repository/UserRepository.js'

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

        res.send({ message: 'ok' })
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
    


})

export default router
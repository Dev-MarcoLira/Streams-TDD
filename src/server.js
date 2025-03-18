import express from 'express'
import { config } from 'dotenv'
import userRouter from './routes/userRouter.js'

config()

const PORT = process.env.PORT
export const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))


server.get('/', (req, res) =>{
    
    res.send({ message: 'ok' })
    
})

server.use(userRouter)

if(import.meta.url === `file://${process.cwd()}/src/server.js`){
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}else{
    server.listen(process.env.PORT_TEST, () => console.log(`Server running on port ${process.env.PORT_TEST}`))
}
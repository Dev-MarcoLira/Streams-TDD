import UserRepository from "../repository/UserRepository.js";
import path from 'node:path'
import { fileURLToPath } from "node:url";

export default class UserService {

    constructor(){
        this.userRepository = new UserRepository()
    }

    async streamAll(res){

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const datasource = path.join(__dirname, '..', 'database', 'MOCK_DATA.json')

        const readline = this.userRepository.streamAll(datasource, res)

        return new Promise((resolve, reject) => {
         
            readline.on('line', (line) => res.write(line + '\n'))
    
            readline.on('close', () => resolve())
    
            readline.on('error', (err) => reject(new Error((`Error reading the file: ${err.message}`))))
            
        })
    }
}
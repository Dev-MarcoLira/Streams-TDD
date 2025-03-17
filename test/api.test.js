import { describe, it } from 'node:test'
import { ok, deepEqual, deepStrictEqual, strictEqual } from 'node:assert'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
const BASE_URL = `http://localhost:${PORT}`

describe('API User Routes', () =>{

    // Home
    it('should return ok', async() =>{

        const response = await (await fetch(BASE_URL)).text()
        //console.log(response)
        
        deepEqual(response, 'ok')

    })

    // Login
    it('should return return invalid user', async() =>{

        const user = {
            name: 'dasdsa',
            password: 'Idk'
        }
        let response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        strictEqual(response.status, 404)
        response = await response.json()
        deepStrictEqual(response, { error: 'user or password is invalid' })
    })

    it('should return logged in', async() =>{
        const user = {
            name: 'Marco Antonio',
            password: '180df50415967b23131f'
        }

        let response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        strictEqual(response.status, 200)
        response = await response.json()
        deepStrictEqual(response, { message: 'logged in' })
    })


    //Register
    it('should return invalid user', async() =>{

        const user = {
            name: '',
            password: '123'
        }
        
        let response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        strictEqual(response.status, 404)
        response = await response.json()
        deepStrictEqual(response, { error: 'user or password is invalid' })
    })

    it('should return ok', async() =>{
        const user = {
            name: 'User',
            password: '123'
        }

        let response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        strictEqual(response.status, 200)
        response = await response.json()
        deepStrictEqual(response, { message: 'ok' })
    })

})
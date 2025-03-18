import { ok, strictEqual } from "node:assert";
import { BASE_URL } from "../util.js"
import { spawn } from "node:child_process";
import { describe, it } from "node:test";

const server = spawn('node', ['../../src/server.js'], {
    stdio: 'ignore',
    detached: true,
  });

describe('API Stream Routes', () => {

    it('should stream content correctly', async() =>{

        let response = await fetch(`${BASE_URL}/stream`)

        strictEqual(response.status, 200)
        response = await response.json()
        
        strictEqual(response.message, 'streamed content')
    })

})
import { ok, strictEqual } from "node:assert";
import { after, describe, it } from "node:test";

import { integration } from '../util.js'
import { spawn } from 'node:child_process';

const { BASE_URL } = integration

const server = spawn('node', ['../../src/server.js'], {
    stdio: 'ignore',
    detached: true,
  });

describe('API Stream Routes', () => {
    
    after(() =>{
        server.kill()
    })

    it('should stream content correctly', async() =>{

        let response = await fetch(`${BASE_URL}/stream`)

        strictEqual(response.status, 200)
        response = await response.json()
        
        strictEqual(response.message, 'streamed content')
    })

})

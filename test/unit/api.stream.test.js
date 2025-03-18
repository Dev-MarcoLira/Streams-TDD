import { describe, it } from 'node:test'
import { ok, deepEqual, deepStrictEqual, strictEqual } from 'node:assert'

import { unit } from '../util.js'

const { BASE_URL } = unit

describe('API Streaming Routes test suite', () => {

    it('should get a Stream of data', async() => {

        let response = await fetch(`${BASE_URL}/users/all`, {
            method: 'GET'
        })


        strictEqual(
            response.status, 
            200,
            'The HTTP status should be 200'
        )
        deepStrictEqual(response.headers.get('Content-Type'), 'application/json; charset=utf-8')

        response = await response.json()
        deepStrictEqual(response.error, undefined)
        ok(response.hasOwnProperty('id'))
        ok(response.hasOwnProperty('name'))
        ok(response.hasOwnProperty('password'))

    })

})
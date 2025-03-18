import fs from 'fs'
import { Transform } from 'stream'
import UserEntity from '../entity/UserEntity.js'

export default class UserRepository {

    static streamAll(datasource){

        const readableStream = fs.createReadStream(datasource)

        let buffer = ''

         const transformStream = new Transform({
            objectMode: true,
            transform(chunk, encoding, callback) {
                buffer += chunk;
                console.log(buffer.indexOf('}', '}'))
                let startIdx = 0;
                let endIdx = 0;
                
                while ((endIdx = buffer.indexOf('}', startIdx)) !== -1) {
                    try {

                        let jsonObject = buffer.substring(startIdx, endIdx + 1);
                        jsonObject = JSON.parse(jsonObject);

                        const user = UserEntity.fromJSON(jsonObject);
                        this.push(JSON.stringify(user));

                        startIdx = endIdx + 1;
                        console.log('aaa')
                    } catch (err) {
                        break;
                    }
                }

                buffer = buffer.substring(startIdx);
                callback();
            }
        });

        return readableStream.pipe(transformStream);
    }
}
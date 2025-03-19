import fs from 'fs'
import readline from 'readline/promises'

export default class UserRepository {

    // static streamAll(datasource){

    //     const readableStream = fs.createReadStream(datasource)

    //     let buffer = ''

    //      const transformStream = new Transform({
    //         objectMode: true,
    //         transform(chunk, encoding, callback) {
    //             buffer += chunk;
    //             console.log()
    //             let startIdx = 0;
    //             let endIdx = 0;
                
    //             while ((endIdx = buffer.indexOf('}', startIdx)) !== -1) {
    //                 try {

    //                     let jsonObject = buffer.substring(startIdx, endIdx + 1);
    //                     jsonObject = JSON.parse(jsonObject);

    //                     const user = UserEntity.fromJSON(jsonObject);
    //                     this.push(JSON.stringify(user));

    //                     startIdx = endIdx + 1;
    //                     console.log('aaa')
    //                 } catch (err) {
    //                     break;
    //             }
    //                 }

    //             buffer = buffer.substring(startIdx);
    //             callback();
    //         }
    //     });

    //     return readableStream.pipe(transformStream);
    // }

    streamAll(datasource, res){

        const fileStream = fs.createReadStream(datasource)

        const rl = readline.createInterface({
            input: fileStream,
            output: res,
            terminal: false
        })

        return rl        

    }
}
import { MongoClient, ObjectId } from 'mongodb'
import config from '../config.js'
const client = new MongoClient(`mongodb://${config.db.host}:${config.db.port}`)

export async function conection(callback){
    await client.connect()

    const result = await callback(client.db(config.db.dbName))
    
    await client.close()

    return result
}

export default {
    conection
}

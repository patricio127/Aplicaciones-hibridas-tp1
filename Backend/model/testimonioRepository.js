
import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://localhost:27017')



export async function getAll() {
    return client.connect()
        .then(function (client) {
            const db = client.db('Genshin')
            let testimonios = db.collection('testimonios').find({
                deleted : false
            })
            return testimonios.toArray()
        })
        .catch(function (err) {
            return err            
        })
        .finally(function(){
            client.close()
        })
}
export async function getVisibleHome() {
    return client.connect()
        .then(function (client) {
        const db = client.db('Genshin')
        let testimonios = db.collection('testimonios').find({
            visible : true ,
            deleted : false,
        })
        return testimonios.toArray()
        })
        .catch(function (err) {
            return err            
        })
        .finally(function(){
            client.close()
        })
    }
       

export function create(entity){
    
    return client.connect()
    .then(function(client){
        const db = client.db('Genshin')
        return db.collection('testimonios').insertOne({
            name: '',
            perfil: '',
            testimonio: '',
            visible: false, 
            ...entity, 
            deleted: false,
        })
        .then(function(result){
            return {...entity, _id: result.insertedId}
        })
    })
    
    .catch(function(err){
        return err
    })
    .finally(function(){
        client.close()
    })
}

export function remove(id){
    return client.connect()
    .then(function(client){
        const db = client.db('Genshin')
        try {
            return db.collection('testimonios').deleteOne({_id: ObjectId(id)})
            .then(function(result){
                return result.deletedCount > 0
            }) 
        } catch (e) {
            print(e);
        }
    })
    .catch(function(err){
        return err
    })
    .finally(function(){
        client.close()
    })
}

export function update(id, changes){
    return client.connect()
    .then(function(client){
        const db = client.db('Genshin')
        try {
            return db.collection('testimonios').updateOne({_id: ObjectId(id)}, {$set: changes})
            .then(function(result){
                return result.matchedCount > 0
            }) 
        } catch (e) {
            print(e);
        }
    })
    .catch(function(err){
        return err
    })
    .finally(function(){
        client.close()
    })
}

export function replace(id, entity){
    return client.connect()
    .then(function(client){
        const db = client.db('Genshin')
        try {
            return db.collection('testimonios').replaceOne({_id: ObjectId(id)}, entity)
            .then(function(result){
                return result.modifiedCount > 0
            }) 
        } catch (e) {
            print(e);
        }
    })
    .catch(function(err){
        return err
    })
    .finally(function(){
        client.close()
    })
}

export default {
    getAll,
    getVisibleHome,
    create,
    remove,
    update,
    replace,
}
import { conection } from "./conection.js"
import { ObjectId } from 'mongodb'
export async function getAll() {
    try{
        return await conection(async function(db){
            const eventos = await db.collection('eventos').find({
                deleted : false
            })
            return eventos.toArray()
        })
    } catch(err){
        console.error(err)
        throw {error: 500, msg: "No se puden obtener los eventos."}
    }
}

export async function get(id) {
    try{
        return await conection(async function(db){
            const evento = await db.collection('eventos').findOne({_id: ObjectId(id), deleted: false})
            if(evento){
                return evento
            } else{
                console.error(`Evento ${id} no encontrado`)
                throw {error: 404, msg: "El evento no existe."}
            }
            
        })
    } catch(err){
        console.error(err)
        throw {error: 500, msg: "No se pudo obtener el evento."}
    }
}
       

export async function create(entity){
    try{
        return await conection(async function(db){
            const result = await db.collection('eventos').insertOne({
                titulo: '',
                descripcion: '',
                fecha_inicio: '',
                fecha_fin: '', 
                imagen: '',
                ...entity, 
                deleted: false,
            });
            return {...entity, _id: result.insertedId}
        })
    } catch(err){
        console.error(err)
        throw {error: 500, msg: "No se pudo crear el evento."}
    }
}

export async function remove(id){
    try{
        return await conection(async function(db){
            const result = await db.collection('eventos').deleteOne({_id: ObjectId(id)});
            return result.deletedCount > 0
        }) 
    } catch(err){
        console.error(err)
        throw {error: 500, msg: "No se pudo eliminar el evento."}
    }
}

export async function update(id, changes){
    try{
        return await conection(async function(db){
            const result = await db.collection('eventos').updateOne({_id: ObjectId(id)}, {$set: changes});
            return result.matchedCount > 0
        })
    } catch(err){
        console.error(err)
        throw {error: 500, msg: "No se pudo editar el evento."}
    }
}


export default {
    getAll,
    get,
    create,
    remove,
    update,
}
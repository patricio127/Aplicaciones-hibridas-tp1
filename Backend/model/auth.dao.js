import { conection } from "./conection.js"
import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'

async function login(email, password){
    return await conection(async function(db){
        const usuario = await db.collection('usuarios').findOne({email: email})

        if(usuario){
            const validate = await bcrypt.compare(password, usuario.password)
            if(validate){
                return {
                    id: usuario._id,
                    name: usuario.name,
                    email: usuario.email, 
                    isAdmin: usuario.isAdmin || false
                }
            } else {
                throw {error: 1000, msg: "La contraseña es incorrecta."}
            }
        } else{
            throw {error: 1000, msg: "El usuario no existe."}
        }
    })
}
async function register(usuario){
    return await conection(async function(db){

        const userOld = await db.collection('usuarios').findOne({email: usuario.email})
        if(!userOld){
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(usuario.password, salt)
            await db.collection('usuarios').insertOne({
                name: usuario.name,
                email: usuario.email,
                password: password, 
                isAdmin: false,
            })
        } else {
            throw {error: 400, msg: "El usuario ya existe."}
        }
        
    })
}

async function findAll(){
    return await conection(async function(db){
        return await db.collection('usuarios').find().toArray()
    })
}
async function update(id, changes){
    try{
        return await conection(async function(db){
            const result = await db.collection('usuarios').updateOne({_id: ObjectId(id)}, {$set: changes});
            if(result.matchedCount > 0) {
                return true
            } else {
                throw {error: 404, msg: "El usuario no se encuentra."}
            }
             
        })
    } catch(err){
        console.error(err)
        throw {error: 500, msg: "No se pudo editar el usuario."}
    }
}
export default {
    login,
    register,
    findAll,
    update
}
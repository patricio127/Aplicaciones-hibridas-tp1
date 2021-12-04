import { conection } from "./conection.js"
import bcrypt from 'bcrypt'

async function login(email, password){
    return await conection(async function(db){
        const usuario = await db.collection('usuarios').findOne({email: email})

        if(usuario){
            const validate = await bcrypt.compare(password, usuario.password)
            if(validate){
                return {
                    id: usuario._id,
                    name: usuario.name,
                    email: usuario.email
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
                password: password
            })
        } else {
            throw {error: 400, msg: "El usuario ya existe."}
        }
        
    })
}

async function findAll(){
    console.log("findall auth")
    return await conection(async function(db){
        return await db.collection('usuarios').find().toArray()
    })
}

export default {
    login,
    register,
    findAll
}
import authDao from "../model/auth.dao.js";
import { generate } from '../middleware/tokenValidator.js'
import bcrypt from 'bcrypt'

function login(req, res){
    console.log('login')
    authDao.login(req.body.email, req.body.password)
    .then(function(data){
        const token = generate({
            id: data.id,
            name: data.name,
            email: data.email
        })
        res.header('auth-token', token).json({usuario: data, token: token})
    })
    .catch(function(err){
        if(err.error){
            console.error(err)
            res.status(401).json({error: 401, msg: err.msg})
        } else {
            res.status(500).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
        }
    })
}
function register(req, res){
    const usuario = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    authDao.register(usuario)
    .then(function(){
        res.json({msg: "Usuario registrado correctamente"})
    })
    .catch(function(err){
        if(err.error){
            console.error(err)
            res.status(400).json({error: 400, msg: err.msg})
        } else {
            console.error(err)
            res.status(500).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
        }
            
    })
}
function findAll(req, res){
    authDao.findAll()
    .then(function(result){
        res.json(result)
    })
    .catch(function(err){
        if(err.error){
            res.status(400).json({error: 400, msg: err.msg})
        } else {
            res.status(500).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
        }
    })
}
function getLogin(req, res){
    res.json(req.usuario)
}

async function update(req, res){
    const changes = {
        name: req.body.name,
        email: req.body.email
    }
    if(req.body.password){
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)
        changes.password = password

    }
    authDao.update(req.usuario.id, changes)
    .then(function(){
        const usuario = {
            id: req.usuario.id,
            name: changes.name || req.usuario.name,
            email: changes.email || req.usuario.email
        }
        const token = generate(usuario)
        res.header('auth-token', token).json({usuario: usuario, token: token})
    })
    .catch(function(err){
        console.error(err)
        res.status(err.error).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
    })
}
export default{
    register,
    login,
    findAll,
    getLogin,
    update
}
import authDao from "../model/auth.dao.js";
import { generate } from '../middleware/tokenValidator.js'

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
export function getLogin(req, res){
    res.json(req.usuario)
}
export default{
    register,
    login,
    findAll,
    getLogin
}
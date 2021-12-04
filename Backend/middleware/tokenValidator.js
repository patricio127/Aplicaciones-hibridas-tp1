import jwt from 'jsonwebtoken'

export function tokenValidator(req, res, next){
    const token = req.header('auth-token')

    if(token){
        try{
            const datosUser = jwt.verify(token, "GENSHIN")
            req.usuario = datosUser
            next()
        } catch(err){
            return res.status(400).json({error: 400, msg: "Token no valido."})
        }
    } else {
        return res.status(400).json({error: 400, msg: "Acceso denegado."})
    }
}
export function generate(data){
    return jwt.sign(data, "GENSHIN")
}
export default {
    tokenValidator,
    generate
}
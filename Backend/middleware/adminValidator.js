export function adminValidator(req, res, next){
    try{
        const isAdmin = req.usuario.isAdmin
        console.log(req.usuario)
        if (isAdmin) {
            next()
        } else {
            return res.status(403).json({error: 403, msg: "No tiene permisos."})
        }
    } catch(err){
        console.error(err)
        return res.status(500).json({error: 500, msg: "Error inesperado validando permisos."})
    }
}
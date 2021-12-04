import eventDao from "../model/events.dao.js";

function getAll(req, res){
    eventDao.getAll()
    .then(function(result){
        res.json(result)
    })
    .catch(function(err){
        res.status(err.error).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
    })
}
function get(req, res){
    eventDao.get(req.params['id'])
    .then(function(result){
        res.json(result)
    })
    .catch(function(err){
        res.status(err.error).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
    })
}
function create(req, res){
    eventDao.create(req.body)
    .then(function(result){
        res.json(result)
    })
    .catch(function(err){
        res.status(err.error).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
    })
}
function remove(req, res){
    eventDao.remove(req.params['id'])
    .then(function(result){
        res.json(result)
    })
    .catch(function(err){
        res.status(err.error).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
    })
}
function update(req, res){
    eventDao.update(req.params['id'], req.body)
    .then(function(result){
        res.json(result)
    })
    .catch(function(err){
        res.status(err.error).json({error: 500, msg: "Ocurrio un error, intente nuevamente."})
    })
}
export default {
    getAll,
    get,
    create,
    remove,
    update
}
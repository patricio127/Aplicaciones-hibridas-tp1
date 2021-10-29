import { promises } from 'fs'
import repository from '../repositories/testimonioRepository.js'

function getAll (req, res) {
    repository.getAll()
        .then(function (testimonios) {
            res.status(200).json(testimonios)
        })
        .catch(function (err) {
            res.status(500)
            res.json({ err: 500, msg: err.message })
        })
}

function remove (req, res) {
    repository.remove(req.params.id)
        .then(function (deletedOk) {
            if (deletedOk) {
                res.status(200).json({deleted: deletedOk})
            }
            else {
                res.status(404).json({ err: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
            }
        })
        .catch(function (err) {
            res.status(500)
            res.json({ err: 500, msg: err.message })
        })
}

function update (req, res) {
    repository.update(req.params.id, req.body)
        .then(function (actualizadoOk) {
            if (actualizadoOk) {
                res.status(200).json({updated : true})
            }
            else {
                res.status(404).json({ err: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
            }
        })
        .catch(function (err) {
            res.status(500)
            res.json({ err: 500, msg: err.message })
        })
}

function replace (req, res) {
    repository.replace(req.params.id, req.body)
        .then(function (actualizadoOk) {
            if (actualizadoOk) {
                res.status(200).json({replaced : true})
            }
            else {
                res.status(404).json({ err: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
            }
        })
        .catch(function (err) {
            res.status(500)
            res.json({ err: 500, msg: err.message })
        })
}

function create (req, res) {
    repository.create(req.body)
        .then(function (actualizadoOk) {
            if (actualizadoOk) {
                res.status(200).json({created : true})
            }
            else {
                res.status(404).json({ err: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
            }
        })
        .catch(function (err) {
            res.status(500)
            res.json({ err: 500, msg: err.message })
        })
}

export default {
    getAll,
    remove,
    update,
    replace,
    create,
}
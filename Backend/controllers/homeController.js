import { promises } from 'fs'
import repository from '../model/testimonioRepository.js'

function home(req, res) {
    repository.getVisibleHome()
        .then(function (testimonios) {
            res.render('home', {
                
                testimonios: testimonios
            })
            console.log(testimonios);
        })
        .catch(function (err) {
            res.status(500).json({ err: 500, msg: err.message })
        })
}

export function testimonioCrearForm(req, res) {
    res.render("testimonio-crear", {})
}

export function crearTestimonio(req, res) {
    repository.create(req.body)
    .then(function(entity){
        res.render("testimonio-creado", entity)
    })
    .catch(function(err){
        res.status(500).send(err.message)
    })
}


export default {
    home,
    testimonioCrearForm,
    crearTestimonio
}
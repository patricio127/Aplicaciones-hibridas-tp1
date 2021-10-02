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
    promises.readFile('./data/testimonios.json')
        .then(function (data) {

            const testimonios = JSON.parse(data.toString())
            const testimonio = testimonios.find(function (t) {
                return t.id == req.params.id
            })

            if (testimonio) {
                testimonio.deleted = true

                promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios, null, 4))
                    .then(function () {
                        res.status(200).json(testimonio)
                    })
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
    promises.readFile('./data/testimonios.json')
            .then(function (data) {
                const testimonios = JSON.parse(data.toString())
                let testimonio = testimonios.find(function (t) {
                    return t.id == req.params.id
                })

                if (testimonio) {

                    const index = testimonios.indexOf(testimonio)
                    testimonios[index] = { ...testimonios[index], ...req.body, id: testimonio.id }

                    promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios, null, 4))
                        .then(function () {
                            res.status(200).json(testimonios[index])
                        })
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
    update
}
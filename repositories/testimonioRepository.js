import {promises} from 'fs'

export async function getAll() {
    return promises.readFile('./data/testimonios.json')
        .then(function (data) {
            const testimonios = JSON.parse(data.toString())
            return testimonios.filter(function(e){
                return e.deleted != true
            })
        })
        .catch(function (err) {
            return err            
        })
}
export async function getVisibleHome() {
    return promises.readFile('./data/testimonios.json')
        .then(function (data) {
            const testimonios = JSON.parse(data.toString())
            return testimonios.filter(function(e){
                return e.deleted != true && e.visible == true
            })
        })
        .catch(function (err) {
            return err            
        })
}

export async function create(entity){
        return promises.readFile('./data/testimonios.json')
        .then(function (data) {
            const testimonios = JSON.parse(data.toString())
            
            entity.id = testimonios.length + 1

            testimonios.push(entity);

            return promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios, null, 4)) 
        })
        .then(function () {
            return entity
        })
        .catch(function (err) {
           return err
        })
}


export default {
    getAll,
    getVisibleHome,
    create,
}
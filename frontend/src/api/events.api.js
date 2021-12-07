import config from '../config/config';

export async function deleteEvent(id) {
    console.log(id)
    return fetch(`${config.api.url}/eventos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
}
export async function getAll() {
    return fetch(`${config.api.url}/eventos/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
}
export async function get(id) {
    return fetch(`${config.api.url}/eventos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
}
export async function create(evento) {
    return fetch(`${config.api.url}/eventos/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(evento)
    })
    .then(res => res.json())
}
export async function update(evento) {
    return fetch(`${config.api.url}/eventos/${evento._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(evento)
    })
    .then(res => res.json())
}

export default {
    deleteEvent,
    getAll,
    get,
    create,
    update
}
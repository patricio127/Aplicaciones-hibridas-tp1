import config from '../config/config';

export async function deleteEvent(id) {
    console.log(id)
    const promise = new Promise((resolve, reject) => {
        fetch(`${config.api.url}/eventos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            }
        })
        .then(async res => {
            if (res.ok) {
                const data = await res.json()
                resolve(data)
            } else {
                const err = await res.json()
                reject(err)
            }    
        })
    });
    return promise;
    
}
export async function getAll() {
    const promise = new Promise((resolve, reject) => {
        fetch(`${config.api.url}/eventos/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            }
        })
        .then(async res => {
            if (res.ok) {
                const data = await res.json()
                resolve(data)
            } else {
                const err = await res.json()
                reject(err)
            }    
        })
    });
    return promise;
    
}
export async function get(id) {
    const promise = new Promise((resolve, reject) => {
        fetch(`${config.api.url}/eventos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            }
        })
        .then(async res => {
            if (res.ok) {
                const data = await res.json()
                resolve(data)
            } else {
                const err = await res.json()
                reject(err)
            }    
        })
    });
    return promise;
}
export async function create(evento) {
    const promise = new Promise((resolve, reject) => {
        fetch(`${config.api.url}/eventos/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify(evento)
        })
        .then(async res => {
            if (res.ok) {
                const data = await res.json()
                resolve(data)
            } else {
                const err = await res.json()
                reject(err)
            }    
        })
    });
    return promise;
}
export async function update(evento) {
    const promise = new Promise((resolve, reject) => {
        fetch(`${config.api.url}/eventos/${evento._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify(evento)
        })
        .then(async res => {
            if (res.ok) {
                const data = await res.json()
                resolve(data)
            } else {
                const err = await res.json()
                reject(err)
            }    
        })
    });
    return promise;
}

export default {
    deleteEvent,
    getAll,
    get,
    create,
    update
}
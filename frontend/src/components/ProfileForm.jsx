import { useEffect, useState} from 'react';
import config from '../config/config';

function ProfileForm(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [token, setToken] = useState("")

    useEffect(()=>{
        console.log('useEffect')
        const localStorageUser = localStorage.getItem('user')
        setToken(localStorage.getItem('token'))
        if(localStorageUser){
            const usuario = JSON.parse(localStorageUser)
            setEmail(usuario.email || '')
            setName(usuario.name || '')
        }
      }, [])

    function onSubmit(e){
        e.preventDefault()
        fetch(`${config.api.url}/usuarios`, {
            method: "PATCH",
            headers:{
                'content-type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify({email, password, name})
        })
        .then(async function(response){
            if(response.ok){
                console.log('primer then')
                const data = await response.json
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data.usuario))
            } else{
                console.error('Error al guardar el usuario')
            }
        })
        .catch(function(err){
            console.error(err)
        })
    }
    return(
        <div className="container">
            <h1>Tu perfil</h1>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" name="name" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button className="btn btn-primary w-100">Modificar</button>
            </form>
        </div>
    )
}
export default ProfileForm
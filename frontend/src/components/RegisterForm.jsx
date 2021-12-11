import {useState} from "react";
import {Link} from 'react-router-dom'

function RegisterForm(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9000/usuarios/register', {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(function(response){
            return response.json()
        })
        .then(function (data) {
            props.setRegister(data.token)
        })
        .catch(function(err){
            console.error(err)
        })
    }
    return(
        <div className="container">
            <h1>Registrarse</h1>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button className="btn btn-primary w-100">Registrarse</button>
            </form>
            <Link to="/login">Ya tienes cuenta?</Link>
        </div>
    )
}
export default RegisterForm
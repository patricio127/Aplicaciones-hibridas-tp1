import {useState} from "react";
import {Link} from 'react-router-dom'

function RegisterForm(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorUserExist, setErrorUserExist] = useState("")
    const [error, setError] = useState("")
    const [wasValidated, setWasValidated] = useState(false)

    function onSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9000/usuarios/register', {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(async function(response){
            setWasValidated(true)
            if (response.ok) {
                const data = await response.json();
                props.setRegister(data.token)
            } else {
                const err = await response.json();
                if(err.error === 400){
                    setErrorUserExist(err.msg)
                } else{
                    setError(err.msg)
                }
                
            }
        })
        .catch(function(err){
            console.error(err)
            setError("Ocurrió un error inesperado.")
        })
    }
    return(
        <div className="container">
            {error? (<div className="alert alert-danger container"> {error}  </div>):""}
            <h1>Registrarse</h1>
            <form onSubmit={(e)=>onSubmit(e)} className={wasValidated? 'was-validated': ''}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email"  className={'form-control ' + (errorUserExist ? 'is-invalid': '')} id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <div className={errorUserExist ? "invalid-feedback" : "valid-feedback"}>
                        {errorUserExist? errorUserExist : ""}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password"   className="form-control" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                <button className="btn btn-primary w-100">Registrarse</button>
            </form>
            <Link to="/login">Ya tienes cuenta?</Link>
        </div>
        
    )
}
export default RegisterForm
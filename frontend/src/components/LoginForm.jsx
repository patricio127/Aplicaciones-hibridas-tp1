import {useState} from "react";
import {Link} from 'react-router-dom'
import { useSession } from "../context/SessionContext";

function LoginForm(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {handleLogin} = useSession()

    function onSubmit(e){
        e.preventDefault()
        handleLogin(email, password)
    }
    return(
        <div className="container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" required className="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" required className="form-control" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button className="btn btn-primary w-100">Ingresar</button>
            </form>
            <Link to="/registrarse">No tienes cuenta? Registrarse</Link>
        </div>
    )
}
export default LoginForm
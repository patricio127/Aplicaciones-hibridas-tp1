import {useState} from "react";

function Login(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9000/usuarios/login', {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(function(response){
            return response.json()
        })
        .catch(function(err){
            alert(JSON.stringify(err))
        })
    }
    return(
        <div>
            <form onSubmit={(e)=>onSubmit(e)}>
                <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button>Ingresar</button>
            </form>
        </div>
    )
}
export default Login
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom'

export const SessionContext = createContext();

export function SessionProvider(props) {
    const [isAuthenticated, setAuthenticated] = useState(true);
    let navigate = useNavigate();
    const handleLogin = (email, password)=>{
        const loginPromise = new Promise((resolve, reject)=>{
            fetch('http://localhost:9000/usuarios/login', {
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            .then(async function(response){
                if(response.ok){
                    const data = await response.json()
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('user', JSON.stringify(data.usuario))
                    setAuthenticated(true)
                    navigate('/', {replace: true});
                    resolve(true)
                } else{
                    const err = await response.json()
                    if(err.error === 401) {
                        reject("Usuario y/o contraseña incorrectos")
                    } else{
                        reject("Ocurrió un error, intente nuevamente")
                    }
                }
            })
            .catch(function(err){
                console.error(err)
                reject("Ocurrió un error, intente nuevamente")
            })
        })
        return loginPromise
      }
      const handleLogout = ()=>{
        localStorage.clear();
        setAuthenticated(false)
        navigate('/', {replace: true})
      }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setAuthenticated(true)
          } else {
            setAuthenticated(false)
          }
    }, [])
    return (
        <SessionContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>
            {props.children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
}

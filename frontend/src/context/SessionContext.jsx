import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom'

export const SessionContext = createContext();

export function SessionProvider(props) {
    const [isAuthenticated, setAuthenticated] = useState(true);
    let navigate = useNavigate();
    const handleLogin = (email, password)=>{
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
        .then(function (data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.usuario))
            setAuthenticated(true)
            navigate('/', {replace: true})
        })
        .catch(function(err){
            console.error(err)
        })
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

import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom'
import config from '../config/config';

export const SessionContext = createContext();

const isAdminLs = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')).isAdmin : false

export function SessionProvider(props) {
    const [isAuthenticated, setAuthenticated] = useState(true);
    const [isAdmin, setIsAdmin] = useState(isAdminLs);
    let navigate = useNavigate();
    const handleLogin = (email, password)=>{
        const loginPromise = new Promise((resolve, reject)=>{
            fetch(`${config.api.url}/usuarios/login`, {
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
                    setIsAdmin(data.usuario.isAdmin || false)
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
        setIsAdmin(false)
        navigate('/', {replace: true})
      }
    //Uso useEffect(___,[]) que es como hacer component didmount
    useEffect(()=>{
        console.log("useEffect")
        if(localStorage.getItem('token')){
            setAuthenticated(true)
            try {
                setIsAdmin(JSON.parse(localStorage.getItem('user')).isAdmin)
            } catch {
                console.log(`error localstorage set is admin`)
                setIsAdmin(false)
            }
          } else {
            setAuthenticated(false)
            setIsAdmin(false)
          }
    }, [])
    return (
        <SessionContext.Provider value={{ isAuthenticated, isAdmin, handleLogin, handleLogout }}>
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

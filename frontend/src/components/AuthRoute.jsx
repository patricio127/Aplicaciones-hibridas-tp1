import { useSession } from "../context/SessionContext"
import { Navigate} from 'react-router-dom'

export default function AuthRoute(props){
    /*  Este componente se fija si el usuario esta autenticado
        Si esta autenticado permite ver la pagina de la ruta, 
        sino... redirige a login.
        Ademas recibe por props la prop adminOnly (opcional) 
        Si esta prop es true, se fija además de que este autenticado, que sea admin
        y si es admin, deja acceder, sino, redirige a home
    */
    const {isAuthenticated, isAdmin} = useSession()
    console.log(`auth route ${isAdmin}`)
    let canAccess = false;
    if (props.adminOnly) { //si esta prop es true, solo los admin pueden acceder
        canAccess = isAdmin
    } else {
        canAccess = true
    }
    return(isAuthenticated? (
        canAccess ? props.children : <Navigate to="/"/>
    ):<Navigate to="/login"/>)
}
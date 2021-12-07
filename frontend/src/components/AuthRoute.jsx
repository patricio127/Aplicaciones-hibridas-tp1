import { useSession } from "../context/SessionContext"
import { Navigate} from 'react-router-dom'

export default function AuthRoute(props){
    const {isAuthenticated} = useSession()
    return(isAuthenticated? props.children :<Navigate to="/login"/>)
}
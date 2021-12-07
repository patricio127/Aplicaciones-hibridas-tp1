import LoginForm from "../components/LoginForm"
import { useSession } from "../context/SessionContext"
import './Login.css'
import { Navigate} from 'react-router-dom'

function Login(props){
    const {isAuthenticated} = useSession()
    return(isAuthenticated? <Navigate to="/perfil"/> : <LoginForm/>)
}
export default Login
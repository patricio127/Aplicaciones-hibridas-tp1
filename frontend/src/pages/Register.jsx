import RegisterForm from "../components/RegisterForm"
import { useNavigate} from 'react-router-dom'
import { useSession } from "../context/SessionContext"
import { Navigate} from 'react-router-dom'

function Register(props){
    let navigate = useNavigate();
    const handleRegister = (token)=>{
        localStorage.setItem('token', token)
        navigate('/login', {replace: true})
    }
    const {isAuthenticated} = useSession()
    return(isAuthenticated? <Navigate to="/perfil"/> : <RegisterForm setRegister={(token)=>handleRegister(token)}/>)
}


export default Register
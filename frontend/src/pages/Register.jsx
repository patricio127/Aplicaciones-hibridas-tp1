import RegisterForm from "../components/RegisterForm"
import { useNavigate} from 'react-router-dom'

function Register(props){
    let navigate = useNavigate();
    const handleRegister = (token)=>{
        localStorage.setItem('token', token)
        navigate('/login', {replace: true})
    }
    return(
        <RegisterForm setRegister={(token)=>handleRegister(token)}/>
    )
}


export default Register
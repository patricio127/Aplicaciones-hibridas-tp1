import LoginForm from "../components/LoginForm"
import './Login.css'

function Login(props){
    return(
        <LoginForm setLogin={props.setLogin}/>
    )
}
export default Login
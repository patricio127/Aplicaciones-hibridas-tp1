import LoginForm from "../components/LoginForm"

function Login(props){
    return(
        <LoginForm setLogin={props.setLogin}/>
    )
}
export default Login
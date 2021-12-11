import {Link} from 'react-router-dom'
import { useSession } from '../context/SessionContext';

function Header(props){
    const {isAuthenticated, isAdmin, handleLogout} = useSession()
    return(
        <header>
        <h1 className="visually-hidden">Genshin Impact</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                <img src="/img/logo.png" alt="Logo" width="200" height="140" className="d-inline-block align-text-top"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                <div className="collapse navbar-collapse " id="navbar">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link px-3" aria-current="page" to="/">INICIO</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link px-3" to="/eventos">EVENTOS</Link>
                      </li>
                      {isAuthenticated && isAdmin ? (
                      <li className="nav-item">
                        <Link className="nav-link px-3" to="/admin/eventos">ADMINISTRAR</Link>
                      </li>
                      ):''}
                      {isAuthenticated? (
                      <li className="nav-item">
                        <Link className="nav-link px-3" to="/perfil">PERFIL</Link>
                      </li>
                      ) : ''}
                      {isAuthenticated? (
                      <li className="nav-item">
                        <a className="btn nav-link px-3" type="submit" onClick={(e)=> {e.preventDefault(); handleLogout()}}>CERRAR SESION</a>
                      </li>
                      ) : (
                      <li className="nav-item">
                        <Link className="nav-link px-3" to="/login">INICIAR SESION</Link>
                      </li>
                      )}
                      {!isAuthenticated? (
                      
                      <li className="nav-item">
                        <Link className="nav-link px-3" to="/registrarse">REGISTRARSE</Link>
                      </li>
                      ): ''}
                    </ul>
                  </div>
            </div>
        </nav>
    </header>
    )
}
export default Header;
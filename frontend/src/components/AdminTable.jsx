import {useState} from "react";

function AdminTable(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(e){
        e.preventDefault()
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
            props.setLogin(data.user)
        })
        .catch(function(err){
            console.error(err)
        })
    }
    return(
        <section id="admin" className="container">
            <div>
                <h2 className="my-5">Listado de eventos</h2>
                
                <a className="btn btn-primary" href="">Agregar nuevo evento</a>
            </div>
            <div className="mb-2">
                <form action="" method="get">
                    <div className="d-flex">
                        <div className="mb-3">
                            <label htmlFor="titulo" className="form-label"></label>
                            <input type="search" id="titulo" placeholder="Buscar..." name="titulo" className="form-control" value=""/>
                        </div>
                        <button type="submit" className="btn btn-primary m-4">Buscar</button>
                    </div>
                    
                </form>
            </div>
            <table className="table table-dark table-striped">
                <thead className="container-fluid">
                    <tr className="row">
                        <th className="col-sm-1">ID</th>
                        <th className="col-sm-2">Título</th>
                        <th className="col-sm-3">Descripción</th>
                        <th className="col-sm-2">Temática</th>
                        <th className="col-sm-1">Fecha Inicio</th>
                        <th className="col-sm-1">Fecha Finalización</th>
                        <th className="col-sm-2">Acciones</th>
                    </tr>
                </thead>
                <tbody className="container-fluid">
                        <tr className="row">
                            <td className="col-sm-1"></td>
                            <td className="col-sm-2"></td>
                            <td className="col-sm-3"><span  className="d-inline-block text-truncate" style="max-width: 150px;"></span></td>
                            <td className="col-sm-2"><span className="badge rounded-pill bg-secondary"></span></td>
                            <td className="col-sm-1"></td>
                            <td className="col-sm-1"></td>
                            <td className="col-sm-2">
                                <div className="action d-flex">
                                    <a className="btn btn-info m-2" href="">VER</a>
                                    <a className="btn btn-primary m-2" href="">EDITAR</a>
                                    <form action="" method="post" className="m-2">
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Eliminar
                                        </button>
                                        <div className="modal fade" id="exampleModal-" tabndex="-1" aria-labelledby="exampleModalLabel-" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel-">Estas seguro?</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Estas seguro que quiere elimar el evento ?
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                <button type="submit" className="btn btn-danger">Si, Eliminar</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                                
                            </td>
                        </tr>
                </tbody>
            </table>
        </section> 
    )
}
export default AdminTable
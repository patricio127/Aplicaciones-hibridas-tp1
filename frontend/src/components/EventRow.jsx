import { Link } from "react-router-dom"

function EventRow(props){
    const eliminarEvento = ()=>{
        
    }
    return(
    <tr className="row">
        <td className="col-sm-1">{props.evento._id}</td>
        <td className="col-sm-2">{props.evento.titulo}</td>
        <td className="col-sm-3"><span  className="d-inline-block text-truncate" style="max-width: 150px;">{props.evento.descripcion}</span></td>
        <td className="col-sm-2"><span className="badge rounded-pill bg-secondary">Tematica</span></td>
        <td className="col-sm-1">{props.evento.fecha_inicio}</td>
        <td className="col-sm-1">{props.evento.fecha_fin}</td>
        <td className="col-sm-2">
            <div className="action d-flex">
                <Link className="btn btn-info m-2" to={`/evento/${props.evento._id}`}>VER</Link>
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
                            <button className="btn btn-danger" onClick={()=>eliminarEvento()}>Si, Eliminar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>
    )
}
export default EventRow
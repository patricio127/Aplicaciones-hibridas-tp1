import { Link } from "react-router-dom"
import { useEvents } from "../context/EventsContext"

function EventRow(props){
    const {remove} = useEvents()
    const eliminarEvento = ()=>{
        if(window.confirm("Confirmar eliminación del evento")){
            remove(props.evento)
        }
    }
    return(
    <tr className="row">
        <td className="col-sm-1">{props.evento._id}</td>
        <td className="col-sm-2">{props.evento.titulo}</td>
        <td className="col-sm-3"><span  className="d-inline-block text-truncate" style={{maxWidth: "150px"}}>{props.evento.descripcion}</span></td>
        <td className="col-sm-2"><span className="badge rounded-pill bg-secondary">Tematica</span></td>
        <td className="col-sm-1">{props.evento.fecha_inicio}</td>
        <td className="col-sm-1">{props.evento.fecha_fin}</td>
        <td className="col-sm-2">
            <div className="action d-flex">
                <Link className="btn btn-info m-2" to={`/detalle-evento/${props.evento._id}`}>VER</Link>
                <button type="button" className="btn btn-danger m-2" onClick={()=>eliminarEvento()}>
                Eliminar
                </button>
            </div>
        </td>
    </tr>
    )
}
export default EventRow
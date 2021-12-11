import {Link} from 'react-router-dom'
function EventItem(props){
    return(
        <Link to={`/detalle-evento/${props.evento._id}`}>
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title">{props.evento.titulo}</h3>
                    <div className="d-flex">
                        <div className="d-flex mx-5">
                            <p className="card-text mx-1"><small className="text-muted">{props.evento.fecha_inicio} ~</small></p>
                            <p className="card-text mx-1"><small className="text-muted">{props.evento.fecha_fin}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default EventItem
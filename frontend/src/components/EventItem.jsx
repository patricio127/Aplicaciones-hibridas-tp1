import {Link} from 'react-router-dom'
function EventItem(props){
    return(
        <Link to={`/detalle-evento/${props.evento._id}`}>
            <div class="card mb-3">
                <img src={props.evento.imagen} class="card-img-top" alt="Imagen del evento"/>
                <div class="card-body">
                    <h3 class="card-title">{props.evento.titulo}</h3>
                    <div class="d-flex">
                        <div class="d-flex mx-5">
                            <p class="card-text mx-1"><small class="text-muted">{props.evento.fecha_inicio} ~</small></p>
                            <p class="card-text mx-1"><small class="text-muted">{props.evento.fecha_fin}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default EventItem
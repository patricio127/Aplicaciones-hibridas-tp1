import { Navigate, useParams } from "react-router"
import { useEvents } from "../context/EventsContext"

function EventDetails(){
    const {events} = useEvents()
    const {id} = useParams()
    const evento = events.find((elem)=> elem._id === id)
    if(!evento){
        return(<Navigate to="/"/>)
    }
    const textoFormato = evento.descripcion.split('\n').map((parrafo, index)=>(<p key={index}>{parrafo}</p>))

    return(
        <section className="container">
            <h2 className="my-5">Detalle del evento</h2>
            <div className="card mb-3">
                <img src={evento.imagen} className="card-img-top" alt="Imagen del evento"/>
                <div className="card-body">
                    <h3 className="card-title">{evento.titulo}</h3>
                    <p className="card-text">{textoFormato}</p>
                    <div className="d-flex">
                        <div className="d-flex mx-5">
                            <p className="card-text mx-1"><small className="text-muted">{evento.fecha_inicio} ~</small></p>
                            <p className="card-text mx-1"><small className="text-muted">{evento.fecha_fin}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EventDetails
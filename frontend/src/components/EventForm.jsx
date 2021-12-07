import {useState} from "react";
import { useEvents } from "../context/EventsContext";
function EventForm(props){
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fecha_inicio, setFecha_inicio] = useState('')
    const [fecha_fin, setFecha_fin] = useState('')
    const [imagen, setImagen] = useState('')

    const {add} = useEvents();
    const guardarEvento = ()=>{
        add({titulo, descripcion, fecha_inicio, fecha_fin, imagen}) 
    }
    return(
        <section id="new-event" className="container">
            <h2 className="my-5">Agregar un Nuevo Evento</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input type="text" id="titulo" name="titulo" className="form-control" value={titulo}  onChange={(e)=>setTitulo(e.target.value)}/>
                </div>
                <div className="input-group mb-3 ">
                    <div>
                        <input type="text" id="fecha_inicio" value="" name="fecha_inicio" className="form-control" 
                        placeholder="AAAA-MM-DD" aria-label="fecha_inicio" value={fecha_inicio}  onChange={(e)=>setFecha_inicio(e.target.value)}/>
                    </div>
                    <div>
                        <span className="input-group-text">~</span>
                    </div>
                    <div>
                        <input type="text" id="fecha_fin" value="" name="fecha_fin" className="form-control" 
                        placeholder="AAAA-MM-DD" aria-label="fecha_fin" value={fecha_fin}  onChange={(e)=>setFecha_fin(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">Imagen</label>
                    <input type="file" id="imagen" name="imagen" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea className="form-control"  id="descripcion" name="descripcion" rows="3" value={descripcion}  onChange={(e)=>setDescripcion(e.target.value)}></textarea>
                </div>
                <button className="btn btn-primary w-100" onClick={(e)=>{e.preventDefault(); guardarEvento()}}>Agregar Evento</button>
            </form>
        </section>
    )
}
export default EventForm
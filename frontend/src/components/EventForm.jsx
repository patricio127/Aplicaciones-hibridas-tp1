import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
function EventForm(props){
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fecha_inicio, setFecha_inicio] = useState('')
    const [fecha_fin, setFecha_fin] = useState('')
    const [error, setError] = useState('')
    let navigate = useNavigate();

    const {add} = useEvents();
    const guardarEvento = ()=>{
        add({titulo, descripcion, fecha_inicio, fecha_fin}).then(
            ()=>{
                navigate('/admin/eventos', {replace: true});
            },
            (e)=>{
                setError(e.msg)
            }
        )
    }
    return(
        <section id="new-event" className="container">
            <h2 className="my-5">Agregar un Nuevo Evento</h2>
            {error? (<div className="alert alert-danger container"> {error}  </div>):""}
            <form  onSubmit={(e)=>{e.preventDefault(); guardarEvento()}}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input type="text" id="titulo" required name="titulo" className="form-control" value={titulo}  onChange={(e)=>setTitulo(e.target.value)}/>
                </div>
                <div className="input-group mb-3 ">
                    <div>
                        <input type="text" id="fecha_inicio" required name="fecha_inicio" className="form-control" 
                        placeholder="AAAA-MM-DD" aria-label="fecha_inicio" value={fecha_inicio}  onChange={(e)=>setFecha_inicio(e.target.value)}/>
                    </div>
                    <div>
                        <span className="input-group-text">~</span>
                    </div>
                    <div>
                        <input type="text" id="fecha_fin" required name="fecha_fin" className="form-control" 
                        placeholder="AAAA-MM-DD" aria-label="fecha_fin" value={fecha_fin}  onChange={(e)=>setFecha_fin(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea className="form-control" required id="descripcion" name="descripcion" rows="3" value={descripcion}  onChange={(e)=>setDescripcion(e.target.value)}></textarea>
                </div>
                <button className="btn btn-primary w-100" >Agregar Evento</button>
            </form>
        </section>
    )
}
export default EventForm
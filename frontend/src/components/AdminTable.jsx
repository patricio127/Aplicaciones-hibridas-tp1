import {useState} from "react";
import EventRow from "./EventRow";
import { useEvents } from "../context/EventsContext";

function AdminTable(){
    const {events, remove, add} = useEvents();
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
                    {events.map((evento)=>(<EventRow evento={evento}/>))}
                </tbody>
            </table>
        </section> 
    )
}
export default AdminTable
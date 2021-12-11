import EventRow from "./EventRow";
import { useEvents } from "../context/EventsContext";
import { Link } from "react-router-dom";
import { useState } from "react";

function AdminTable(){
    const {events} = useEvents();
    return(
        <section id="admin" className="container">
            
            <div>
                <h2 className="my-5">Listado de eventos</h2>
                
                <Link className="btn btn-primary" to="/admin/crear-evento">Agregar nuevo evento</Link>
            </div>
            <table className="table table-dark table-striped">
                <thead className="container-fluid">
                    <tr className="row">
                        <th className="col-sm-1">ID</th>
                        <th className="col-sm-2">Título</th>
                        <th className="col-sm-4">Descripción</th>
                        <th className="col-sm-1">Fecha Inicio</th>
                        <th className="col-sm-1">Fecha Finalización</th>
                        <th className="col-sm-3">Acciones</th>
                    </tr>
                </thead>
                <tbody className="container-fluid">
                    {events.map((evento)=>(<EventRow key={evento._id} evento={evento}/>))}
                </tbody>
            </table>
        </section> 
    )
}
export default AdminTable
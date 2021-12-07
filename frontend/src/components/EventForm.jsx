function EventForm(props){
    return(
        <section id="new-event" className="container">
            <h2 className="my-5">Agregar un Nuevo Evento</h2>
            <form action="{{route('create')}}" method="post" enctype="multipart/form-data">
                <div className="mb-3">
                    <label for="titulo" className="form-label">Título</label>
                    <input type="text" id="titulo" name="titulo" className="form-control" value=""/>
                </div>
                <div className="input-group mb-3 ">
                    <div>
                        <input type="text" id="fecha_inicio" value="" name="fecha_inicio" className="form-control" placeholder="AAAA-MM-DD" aria-label="fecha_inicio"/>
                    </div>
                    <div>
                        <span className="input-group-text">~</span>
                    </div>
                    <div>
                        <input type="text" id="fecha_fin" value="" name="fecha_fin" className="form-control" placeholder="AAAA-MM-DD" aria-label="fecha_fin"/>
                    </div>
                </div>
                <div className="mb-3 ">
                    <label for="tematica_id" className="form-label">Temática</label>
                </div>
                <div className="mb-3">
                    <label for="imagen" className="form-label">Imagen</label>
                    <input type="file" id="imagen" name="imagen" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="imagen_descripcion" className="form-label">Imagen Descripción</label>
                    <input type="text" id="imagen_descripcion" name="imagen_descripcion" className="form-control" value=""/>
                </div>
                <div className="mb-3">
                    <label for="descripcion" className="form-label">Descripción</label>
                    <textarea className="form-control"  id="descripcion" name="descripcion" rows="3"></textarea>
                </div>
                <button classNameName="btn btn-primary w-100">Agregar Evento</button>
            </form>
        </section>
    )
}
export default EventForm
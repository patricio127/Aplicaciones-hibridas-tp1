import EventItem from "../components/EventItem"
import { useEvents } from "../context/EventsContext"

function Events(){
    const {events} = useEvents()
    return(
        <section className="container" id="events">
            <h2 className="my-5">Eventos</h2>
            {events.map((evento)=>(
                <EventItem key={evento._id} evento={evento}></EventItem>
            ))}
        </section>
    )
}
export default Events
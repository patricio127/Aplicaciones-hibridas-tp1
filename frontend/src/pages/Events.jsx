import EventItem from "../components/EventItem"
import { useEvents } from "../context/EventsContext"

function Events(){
    const {events} = useEvents()
    return(
        <section class="container" id="events">
            <h2 class="my-5">Eventos</h2>
            {events.map((evento)=>(
                <EventItem evento={evento}></EventItem>
            ))}
        </section>
    )
}
export default Events
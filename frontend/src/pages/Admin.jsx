import AdminTable from "../components/AdminTable"
import { EventsProvider } from "../context/EventsContext"

function Admin(){
    return(
        <EventsProvider>
            <AdminTable/>
        </EventsProvider>
    )
}
export default Admin
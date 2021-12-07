import AdminTable from "../components/AdminTable"
import { EventsProvider } from "../context/EventsContext.jsx"

function Admin(){
    return(
        <EventsProvider>
            {/* <Route path="/admin/add-event" element={isAuthenticated? <AdminTable />:<Navigate to="/login"/>}/>
            <Route path="/admin/add-event" element={isAuthenticated? <AdminTable />:<Navigate to="/login"/>}/> */}
            <AdminTable/>
        </EventsProvider>
    )
}
export default Admin
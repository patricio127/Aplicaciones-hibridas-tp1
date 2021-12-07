import AdminTable from "../components/AdminTable"
import AuthRoute from "../components/AuthRoute"
import { EventsProvider } from "../context/EventsContext.jsx"
import { Route, Routes, Navigate} from 'react-router-dom'
import EventForm from "../components/EventForm"

function Admin(){
    return(
        <EventsProvider>
            <Routes>
                <Route path="crear-evento" element={<AuthRoute><EventForm /></AuthRoute>}/>
                <Route path="eventos" element={<AuthRoute><AdminTable /></AuthRoute>}/>
            </Routes>
        </EventsProvider>
    )
}
export default Admin
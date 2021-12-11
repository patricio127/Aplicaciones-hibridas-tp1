import AdminTable from "../components/AdminTable"
import AuthRoute from "../components/AuthRoute"
import { Route, Routes} from 'react-router-dom'
import EventForm from "../components/EventForm"

function Admin(){
    return(
        <Routes>
            <Route path="crear-evento" element={<AuthRoute><EventForm /></AuthRoute>}/>
            <Route path="eventos" element={<AuthRoute><AdminTable /></AuthRoute>}/>
        </Routes>
    )
}
export default Admin
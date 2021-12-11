import './App.css';
import Home from './pages/Home'
import { Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Events from './pages/Events';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register'
import { SessionProvider } from './context/SessionContext';
import AuthRoute from './components/AuthRoute';
import EventDetails from './pages/EventDetails';
import { EventsProvider } from './context/EventsContext';

function App () {
  return (
    <div className="App">
      <SessionProvider>
        <Header/>
        <EventsProvider>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/eventos" element={<AuthRoute><Events/></AuthRoute>}/>
            <Route path="/detalle-evento/:id" element={<AuthRoute><EventDetails/></AuthRoute>}/>
            <Route path="/admin/*" element={<AuthRoute><Admin/></AuthRoute>}/>
            <Route path="/perfil" element={<AuthRoute><Profile/></AuthRoute>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registrarse" element={<Register/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </EventsProvider>
        <Footer/>
      </SessionProvider>
    </div>
  );
};

export default App;

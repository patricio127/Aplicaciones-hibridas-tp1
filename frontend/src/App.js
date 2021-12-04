
import { useState } from 'react';
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

function App () {
  const [isAuthenticated, setAuthenticated] = useState(false) 
  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/eventos" element={isAuthenticated? <Events />:<Navigate to="/login"/>}/>
        <Route path="/admin" element={isAuthenticated? <Admin />:<Navigate to="/login"/>}/>
        <Route path="/perfil" element={isAuthenticated? <Profile /> :<Navigate to="/login"/> }/>
        <Route path="/login" element={<Login setLogin={(user)=> setAuthenticated(true)}/>}/>
        <Route path="/registrarse" element={<Register />}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

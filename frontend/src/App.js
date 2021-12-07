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

function App () {
  return (
    <div className="App">
      <SessionProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/eventos" element={<AuthRoute><Events/></AuthRoute>}/>
          <Route path="/admin/*" element={<AuthRoute><Admin/></AuthRoute>}/>
          <Route path="/perfil" element={<AuthRoute><Profile/></AuthRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registrarse" element={<AuthRoute><Register/></AuthRoute>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        <Footer/>
      </SessionProvider>
    </div>
  );
};

export default App;

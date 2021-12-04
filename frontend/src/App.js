
import React from 'react';
import './App.css';
import Home from './pages/Home'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
  
}

export default App;

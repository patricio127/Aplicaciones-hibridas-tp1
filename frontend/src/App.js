
import React from 'react';
import './App.css';
import Home from './pages/Home'
import { Routes, Route} from 'react-router-dom'
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    );
  }
  
}

export default App;

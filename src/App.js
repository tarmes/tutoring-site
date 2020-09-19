import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Navbar />
      </Route>
    
      <Route exact path='/'>
        <Welcome />
      </Route>
    </div>
  );
}

export default App;

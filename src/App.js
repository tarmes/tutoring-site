import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/pages/Welcome'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
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

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>
    </div>
  );
}

export default App;

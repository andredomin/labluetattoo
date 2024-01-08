import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Redes from './Redes';
import Form from './Form';

function App() {
 

  return (
      
    <>  
      <div id="contenedor">
        <Home />
        <About />
        <Gallery />
        <Redes />
        <Form />
      </div>
    </>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Redes from './Redes';
import Form from './Form';
function App() {
 

  return (
      
    
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/redes' element={<Redes />} />
      <Route path='/form' element={<Form />} />
      </Routes>
    </Router>
    
  )
}

export default App

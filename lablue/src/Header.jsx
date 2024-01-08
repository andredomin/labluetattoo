import React from 'react';
import lablue from './img/lablue.png';
import './styles.css';
import { Link } from 'react-router-dom';
import './queries.css'

const Home = () => {
  const linkStyle = {
    cursor: 'pointer',
    fontSize: '32px'
  };

  const linkStyle2 = {
    cursor: 'pointer',
  };

  const linkStyle3 = {
    cursor: 'pointer',
    marginLeft: '10vw'
  };




  return (
    <>
    <nav id="navbar-desktop" className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={lablue} alt='La Blue' width='70' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='home' className="nav-link" aria-current="page" style={linkStyle3}>Inicio</Link>
        <Link to='about' className="nav-link" style={linkStyle3}>Sobre mí</Link>
        <Link to='galeria' className="nav-link" style={linkStyle3}>Galería</Link>
        <Link to='redes' className="nav-link" style={linkStyle3}>Redes Sociales</Link>
        <Link to='formulario' className="nav-link" style={linkStyle3}>Contacto</Link>
      </div>
    </div>
  </div>
</nav>
    <nav id="navbar-phone" className="navbar sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={lablue} alt="La Blue" width="70" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" stroke='black' strokeWidth="10"></path>
</svg></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to="home" className="nav-link" aria-current="page" style={linkStyle}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link" style={linkStyle}>Sobre mi</Link>
          </li>
          <li className="nav-item">
            <Link to="galeria" className="nav-link" style={linkStyle}>Galeria</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" style={linkStyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contacto
            </a>
            <ul className="dropdown-menu">
              <li><Link to="redes" className="dropdown-item" style={linkStyle2}>Redes Sociales</Link></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><Link to="formulario" className="dropdown-item" style={linkStyle2}>Formulario de Contacto</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Home
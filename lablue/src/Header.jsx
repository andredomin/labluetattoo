import React, { useState } from 'react';
import lablue from './img/lablue.png';
import './queries.css';

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

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
    <nav id='navbar-desktop' className="navbar sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={lablue} alt="La Blue" width="100px" /></a>
      <ul className="navbar-nav d-flex flex-row">      
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href='#home' style={linkStyle3}>Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#about' style={linkStyle3} >Sobre mí </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#galeria' style={linkStyle3}>Galería</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#redes' style={linkStyle3}>Redes Sociales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#formulario' style={linkStyle3}>Contacto</a>
        </li>
      </ul>
    </div>
</nav>
      
      <nav id="navbar-phone" className="navbar sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={lablue} alt="La Blue" width="70" /></a>
          <button className="navbar-toggler" type="button" onClick={toggleOffcanvas} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`offcanvas offcanvas-end${showOffcanvas ? ' show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" onClick={closeOffcanvas} aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href='#home' aria-current="page" style={linkStyle} onClick={closeOffcanvas}>Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='#about' style={linkStyle} onClick={closeOffcanvas}>Sobre mi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='#galeria' style={linkStyle} onClick={closeOffcanvas}>Galeria</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" style={linkStyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contacto
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href='#redes' style={linkStyle2} onClick={closeOffcanvas}>Redes Sociales</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href='#form' style={linkStyle2} onClick={closeOffcanvas}>Formulario de Contacto</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

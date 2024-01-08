import React from 'react';
import lablue from './img/lablue.png';
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
        <a className="nav-link" aria-current="page" href='#home' style={linkStyle3}>Inicio</a>
        <a className="nav-link" href='#about' style={linkStyle3}>Sobre mí</a>
        <a className="nav-link" href='#galeria' style={linkStyle3}>Galería</a>
        <a className="nav-link" href='#redes' style={linkStyle3}>Redes Sociales</a>
        <a className="nav-link" href='#form' style={linkStyle3}>Contacto</a>
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
            <a className="nav-link" href='#home' aria-current="page" style={linkStyle}>Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#about' style={linkStyle}>Sobre mi</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#galeria' style={linkStyle}>Galeria</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" style={linkStyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contacto
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href='#redes' style={linkStyle2}>Redes Sociales</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href='#form' style={linkStyle2}>Formulario de Contacto</a></li>
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
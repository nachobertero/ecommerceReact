
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Ecommerce React</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/celulares">Celulares</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/tablets">Tablets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/laptops">Laptops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/accesorios">Accesorios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import "./navbar.scss"
import logo from "../../img/logo.png" 
import CartWidget from "./CartWidget"

const NavBar = () => {
  return ( <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <div className="brand"><img src={logo} width={150} alt="" /></div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto p-5">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cursos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ebooks</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
        <CartWidget/>
      </div>
    </div>
  </nav>

  )
}

export default NavBar

{/* <nav className="navbar">

<div className="brand">
  <img src={logo} width={150} alt="" />
</div>
    { <ul>
        <li>Inicio</li>
        <li>Cursos</li>
        <li>Ebooks</li>
        <li>Sobre Nosotros</li>
        <li>Contacto</li>
    </ul> }
    <CartWidget/>
</nav> */}
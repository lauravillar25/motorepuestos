import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">MotoRepuestos</Link>
        <div>
          <Link className="nav-link text-white" to="/category/repuestos">Repuestos</Link>
          <Link className="nav-link text-white" to="/category/accesorios">Accesorios</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

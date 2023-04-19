import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-transpirent">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Akki Zala</NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/service">Service</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
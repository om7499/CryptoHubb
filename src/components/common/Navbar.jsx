import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <div className="container-fluid shadow">
      <nav className="navbar navbar-expand-lg p-3">
        <div className="container">
          {/* Brand Logo */}
          <NavLink className="navbar-brand fs-3 fw-bold" to="/">
            <img src="./src/assets/logo.avif" alt="logo" style={{width:"30px",height:"30px",borderRadius:"50%"}} /> CryptoHubb
          </NavLink>

          {/* Toggle Button for Mobile */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 fs-5 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link"  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/market">Market</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              
            </ul>

            {/* Login Button */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <button className="btn btn-outline-info px-3 fs-5 fw-semibold rounded-pill">
                    Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar

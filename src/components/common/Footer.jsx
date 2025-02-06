import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.avif'
const Footer = () => {
  return (
    <div className='contaner-fluid border p-3 textcolor-footer'>
      <div className='row'>
        <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <div className='footer-links ps-3'>
            <NavLink className="navbar-brand fs-3 fw-bold " to="/">
            <img src={logo} alt="logo" style={{width:"30px",height:"30px",borderRadius:"50%"}} /> CryptoHubb</NavLink>
            <p>&copy;2025 CryptoHubb</p>
            <p className='cocial-media-links d-flex '>
              <a href="" className='nav-link text-primary fs-2'><i className="bi bi-facebook"></i></a>
              <a href="" className='nav-link mx-2 text-danger fs-2'><i className="bi bi-instagram"></i></a>
              <a href="" className='nav-link text-info fs-2'><i className="bi bi-twitter"></i></a>
              <a href="" className='nav-link mx-2 text-success fs-2'><i className="bi bi-whatsapp"></i></a>
            </p>
            <p><i className="bi bi-globe-americas"></i> Global | English</p>
            </div>      
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-3">
          <div className='footer-links'>
              <h3 className='text-info'>Company</h3>
              <p>About</p>
              <p>Carrees</p>
              <p>Blog</p>
              <p>Leagle and privacy</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-3">
        <div className='footer-links'>
              <h3 className='text-info'>Devlopers</h3>
              <p>Devloper platformt</p>
              <p>Wallets sdk</p>
              <p>CoinBased App</p>
              <p>Exchange API</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-3">
        <div className='footer-links'>
              <h3 className='text-info'>Support</h3>
              <p>Help Center</p>
              <p>Contact</p>
              <p>CreateAccount</p>
              <p>Payment Methods </p>
              <p>Supported Crypto</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

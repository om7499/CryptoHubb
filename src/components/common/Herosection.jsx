import React from 'react'
import hero from '../../assets/hero-img.svg'
const Herosection = () => {
  return (
    <div className="container text-white py-5 my-3 border-bottom border-2">
    <div className="row g-4 mx-auto ">
      {/* Left Section */}
    
     <div className="col-md-6 col-lg-7 bg-transparent p-4 rounded shadow-lg mx-auto">
        <p className=" fw-bold" style={{fontSize:"3rem",color:"aqua"}}>Trade and Invest on Crypto Using Our Platform</p>
        <p className="text my-2 fw-semibold">
          Spend real fights effective anything extra by leading. Mouthwatering
          leading how real formula also locked-in have can mountain thought.
          Jumbo plus shine sale.
        </p>
        
        <div className="d-flex gap-3 mt-4">
          <button className="btn btn-lg btn-outline-warning p-3">Register Now</button>
        </div>
      </div>
    

      {/* Right Section */}
      <div className="col-md-6 col-lg-4 bg-transparent p-4 rounded shadow-lg text-center gap-4">
      <div className='m-auto'>
        <img src={hero} className='img-fluid ' alt="bitcoin" />
      </div>
      </div>
    </div>
  </div>
  )
}

export default Herosection

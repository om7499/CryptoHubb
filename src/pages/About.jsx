import React from 'react'
import AboutSection from '../components/common/AboutSection'

const About = () => {
  return (
    <div className="container  my-5 text-white">

       {/* hero section */}
      <AboutSection/>

      <div className="row mt-4 g-3 bg-white text-black">

        {/* Why Choose secction */}
        <div className="col-md-6 shadow rounded-3">
          <h4 className="text-info text-center">Why Choose Cryptoland?</h4>
          <div className='d-flex justify-content-center p-2'>
          <ul className="list-unstyled text-gray fw-semibold">
            <li>🔯 Secure & Transparent Transactions</li>
            <li>🔯 Advanced Blockchain Technology</li>
            <li>🔯 Community-Driven Ecosystem</li>
            <li>🔯 24/7 Customer Support</li>
            <li>🔯 Low Transaction Fees</li>
            <li>🔯 Seamless User Experience</li>
          </ul>
          </div>
        </div>

        {/* Our Mission section*/}
        <div className="col-md-6 shadow">
        <h4 className="fw-semibold text-info text-center">Our Vision & Mission</h4>
          <div className='d-flex justify-content-center p-2'>
          <p>At Cryptoland, our vision is to create a global financial ecosystem that is decentralized, secure, and accessible to all. We aim to empower users by providing innovative blockchain solutions, ensuring transparency, and fostering an inclusive digital economy.</p>
          </div>
        </div>
      </div>
      
      <div className="row mt-4">

        {/* Why Needed */}
        <div className="col-md-12 p-2">
          <h3 className="text-info fw-simibold text-center my-2">Why Cryptocurrency is Needed?</h3>
          <p className="text-gray p-2">Cryptocurrency offers an alternative to traditional financial systems, reducing dependence on centralized banking and enabling peer-to-peer transactions worldwide. It provides enhanced security, lower transaction costs, and greater financial inclusion, allowing users to control their assets without intermediaries.</p>
        </div>
      </div>
      
      {/* Our Community section */}
      <div className="mt-5 text-center">
        <h4 className="text-info fw-semibold">Join Our Community</h4>
        <p>Become a part of Cryptoland and stay updated with the latest advancements in cryptocurrency. Connect with us on social media and join our growing community of blockchain enthusiasts.</p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn- fw-semibold"> <span className='text-primary '><i className="bi bi-telegram fs-1"></i></span></button>
          <button className="btn btn-teal fw-semibold"> <span className='text-info '><i className="bi bi-twitter fs-1"></i></span></button>
          <button className="btn btn-teal fw-semibold"> <span className='text-danger '><i className="bi bi-instagram fs-1"></i></span></button>
        </div>
      </div>
    </div>
  )
}

export default About

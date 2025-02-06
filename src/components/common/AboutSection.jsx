import React from 'react'
import about from '../../assets/about-img.svg'
const AboutSection = () => {
  return (
    <div className='container my-4 p-5 border-bottom border-2'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img src={about} className='img-fluid'  alt="" />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 '>
                <h1 className='text-info my-2'>About Us</h1>
                <p className='text-white fs-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore. 
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                 </p>
                 <p className='text-white fs-6 my-2'>
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                 </p>
                 <div className='my-3'>
                    <button className='btn btn-primary btn-lg'>Learn More</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection

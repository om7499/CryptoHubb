import React from 'react'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
const OutTeam = () => {
  return (
    <div className='container p-5 my-5 border-bottom border-2'>
      <div className='text-center mb-4'>
        <h1 className='text-info my-2'>Meet Our Team</h1>
        <p className='text-white my-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt. Cryptocash</p>
      </div>
      <div className='row g-3'>
         <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='card text-center'>
                <div><img src={user1} className='img-fluid' alt="" /></div>
                <h4 className='mt-3'>member1</h4>
                <p>CEO</p>
            </div>
         </div>
         <div className='col-lg-3 col-md-6 col-sm-12'>
         <div className='card text-center'>
                <div><img src={user2} className='img-fluid' alt="" /></div>
                <h4 className='mt-3'>member1</h4>
                <p>Product Manager</p>
            </div>
         </div>
         <div className='col-lg-3 col-md-6 col-sm-12'>
         <div className='card text-center'>
                <div><img src={user3} className='img-fluid' alt="" /></div>
                <h4 className='mt-3'>member1</h4>
                <p>Business Manager</p>
            </div>
         </div>
         <div className='col-lg-3 col-md-6 col-sm-12'>
         <div className='card text-center'>
                <div><img src={user1} className='img-fluid' alt="" /></div>
                <h4 className='mt-3'>member1</h4>
                <p>Digital Markete</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default OutTeam

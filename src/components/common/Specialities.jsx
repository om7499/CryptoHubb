import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import f1 from '../../assets/feature-1.svg'
import f2 from '../../assets/feature-2.svg'
import f3 from '../../assets/feature-3.svg'

const Specialities = () => {
  return (
    <div className='container my-3 px-4 py-5 border-bottom border-2'>
      <div className='text-center'>
        <h1 className='text-info'>Our Specialities</h1>
        <p className='text-white fs-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore .</p>
      </div>
      <div className='row  p-4 '>
        <div className='col-lg-4 col-md-4 col-sm-12 mx-auto my-2 d-flex justify-content-center'>
        <div>
        <Card
            hoverable
            style={{
                width:"400px",
               
               }}
            cover={<img alt="example" style={{height:"300px"}} src={f1} />}
           >
            <Meta title="Buy Your Crypto" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore ." />
        </Card>
        </div>
        </div>
       
        <div className='col-lg-4 col-md-4 col-sm-12 mx-auto my-2 d-flex justify-content-center'>
        <div>
        <Card
            hoverable
            style={{
                width:"400px",
              
               }}
            cover={<img alt="example" style={{height:"300px"}} src={f2} />}
           >
            <Meta title="Sell Instantly" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore ." />
        </Card>
        </div>
        </div>
       
        
        <div className='col-lg-4 col-md-4 col-sm-12 mx-auto my-2 d-flex justify-content-center'>
        <div>
        <Card
            hoverable
           style={{
            width:"400px",
           
           }}
            cover={<img alt="example" style={{height:"300px"}} src={f3} />}
           >
            <Meta title="Invest for Longterm" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore ." />
        </Card>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Specialities

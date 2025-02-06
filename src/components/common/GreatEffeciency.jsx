import React from 'react'
import CryptoCardBest from '../cryptos/components/cyptoCard/CryptoCardBest'

const GreatEffeciency = () => {
  return (
    <div className='container p-5 my-5  border-bottom border-2'>
        <div className='text-center mb-4'>
        <h1 className=' text-info'>Great Effeciency Like Never Before</h1>
        </div>
      <div className='row g-3'>
         <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
          <CryptoCardBest/>
         </div>
         <div className='col-lg-6 col-md-6 col-sm-12 px-4 my-3'>
            <h3 className='text-primary'>BestCoins Heare</h3>
          <p className='my-2 text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
           <p className='my-2 text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
             Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>  
             <div className='my-3'>
                <button className='btn btn-lg btn-primary'>Download History</button>
             </div>
         </div>
      </div>
    </div>
  )
}

export default GreatEffeciency

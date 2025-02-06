import React from 'react'
import useCryptostates from '../../hooks/useCryptostates'
import AreaChartBest from '../graphs/AreaChartBest'
const BestCryptostats = () => {

    let {stats,isloading,isError}=useCryptostates()

    if(isloading){
      return <h4>loading..</h4>
    }
    if(isError){
      return <h4>erorr..</h4>
    }
  
    // destructuring the best cryptos
    const {bestCoins=[]}=stats
    //console.log("bestcrypto:",bestCoins)

  return (
    <div className="container-fluid ">
      <div className=' text-center shadow-lg '>
        <h1 className='p-2 text-success bg-white rounded-2'>BestCoins Statistic</h1>
      
     <div className='row gy-3'>
      {
        bestCoins.map((coins)=><AreaChartBest  key={coins.uuid} coins={coins} />
       )
      }
    </div> 
    </div>
   </div>
  )
}

export default BestCryptostats

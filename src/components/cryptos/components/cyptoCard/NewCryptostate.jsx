import React from 'react'
import useCryptostates from '../../hooks/useCryptostates'
import AreaChartBest from '../graphs/AreaChartBest'
const NewCryptostate = () => {
    let {stats,isloading,isError}=useCryptostates()
// console.log(stats);
    if(isloading){
      return <h4>loading..</h4>
    }
    if(isError){
      return <h4>erorr..</h4>
    }
  
    // destructuring the best cryptos
    const {newestCoins=[]}=stats
    // console.log("Newcrypto:",newestCoins)
  return (
    <div className="container-fluid ">
    <div className='row gy-3'>
     {
       newestCoins.map((coins)=><AreaChartBest  key={coins.uuid} coins={coins} />
      )
     }
   </div> 
  </div>
  )
}

export default NewCryptostate

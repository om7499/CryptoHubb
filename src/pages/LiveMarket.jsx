import React from 'react'
import Cryptotable from '../components/cryptos/components/cryptotables/Cryptotable'
import GlobalCryptostats from '../components/cryptos/components/cryptostates/GlobalCryptostats'
import BestCryptostats from '../components/cryptos/components/cyptoCard/BestCryptostats'
//import NewCryptostate from '../components/cryptos/components/cyptoCard/NewCryptostate'
import CryptoFilterCard from '../components/cryptos/components/cryptostates/CryptoFilterCard'

const LiveMarket = () => {
  return (
    <div>

      {/* Global Crypto states */}
      <GlobalCryptostats/>
       
      {/* best coins statistics */}
      <div className='container'>
      <BestCryptostats/>
      </div>
      
      {/* cryptocoins table */}
      <Cryptotable/>

      {/* Top coins filterd map */}
      <CryptoFilterCard/>
    </div>
  )
}

export default LiveMarket

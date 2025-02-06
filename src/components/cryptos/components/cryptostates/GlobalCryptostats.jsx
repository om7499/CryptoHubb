import React from 'react'
import {  Statistic,Card } from 'antd';
import useCryptomarkets from '../../hooks/useCryptomarket';
import useCryptostates from '../../hooks/useCryptostates';
import millify from 'millify';
const GlobalCryptostats = () => {
    let {GlobalStats,isError,isLoading}= useCryptomarkets()
    let {total,total24hVolume,totalCoins,totalExchanges,totalMarketCap,totalMarkets}= GlobalStats
    let {stats,isLoading:loading,isError:error}= useCryptostates()
    // console.log("g :",GlobalStats)
    // console.log("s :",stats)
  return (
    <div className='container mt-3 p-2'>
       <div className='row '>
          <div className=" col-6 col-sm-4 col-md-2 col-lg-2 my-1">
            <Card>
            <Statistic 
            loading={isLoading}
            value={totalCoins}
            title={"totalCoins"}
            valueStyle={{
                color: 'orange',
              }}
            />
            </Card>
            </div>
            <div className=" col-6 col-sm-4 col-md-2 col-lg-2 my-1">
            <Card>
            <Statistic 
            loading={isLoading}
            value={totalMarketCap}
            title={"totalMarketCap"}
            valueStyle={{
                color: 'green',
              }}
            />
            </Card>
            </div>
            <div className=" col-6 col-sm-4 col-md-2 col-lg-2 my-1">
            <Card>
            <Statistic 
            loading={isLoading}
            value={millify(parseFloat(total24hVolume))}
            title={"total24hVolume"}
            valueStyle={{
                color: 'green',
              }}
            />
            </Card>
            </div>
            <div className=" col-6 col-sm-4 col-md-2 col-lg-2 my-1">
            <Card>
            <Statistic 
            loading={isLoading}
            value={totalMarkets}
            title={"totalMarkets"}
            valueStyle={{
                color: 'green',
              }}
            />
            </Card>
            </div>
            <div className=" col-6 col-sm-4 col-md-2 col-lg-2 my-1">
            <Card>
            <Statistic 
            loading={isLoading}
            value={totalExchanges}
            title={"totalExchanges"}
            valueStyle={{
                color: 'green',
              }}
            />
            </Card>
            </div>
            <div className=" col-6 col-sm-4 col-md-2 col-lg-2 my-1">
            <Card>
            <Statistic 
            loading={isLoading}
            value={total}
            title={"total"}
            valueStyle={{
                color: 'orange',
              }}
            />
            </Card>
            </div>
       </div>
    </div>
  )
}

export default GlobalCryptostats

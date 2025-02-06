import React from 'react'
import useCryptostates from '../../hooks/useCryptostates';
import { Divider, Table } from 'antd';
import useCryptoHistory from '../../hooks/useCryptoHistory';
import LineChart from '../graphs/LineChart';
import { AreaChart } from 'recharts';

const CryptoCardBest = () => {
  let {stats}= useCryptostates()
  let bestCoins = Array.isArray(stats?.bestCoins) 
    ? stats.bestCoins.map(coin => ({ ...coin, key: coin.uuid })) 
    : [];
  // console.log("new : ",bestCoins)
  
  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      align:"center",
      responsive : ["xs","sm","md","lg","xl","xxl"],
      render : (text,record)=>(
        <>
        <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        <img src={record.iconUrl} alt="iconUrl" style={{width:"30px",height:"30px"}}/>
        <span className='mx-1'>{record.symbol}</span>
        </div>
        </>
      )
    },
    {
      title: 'name',
      dataIndex: 'name',
      align:"center",
      responsive : ["xs","sm","md","lg","xl","xxl"],
    },
    {
      title: 'Graph',
      dataIndex: 'uuid',
      align:"center",
      responsive : ["xs","sm","md","lg","xl","xxl"],
      render : (coinid)=> <HistoricalData data={coinid}/>
    },
    
  ];

  let HistoricalData=({data})=>{
    // console.log("Hdata:",data)// data-here is uuid for coins
    const {history,isloading,isError}=useCryptoHistory(data)
    // console.log("h:",history)
    if(isloading){
      return <h4>loading..</h4>
    }
    if(isError){
      return <h4>isError...</h4>
    }

    return <LineChart  data={history}/>
  }
  
  return (
    <div className='card mt-1'>
      <Divider><strong>BestCoins</strong></Divider>
      <Table columns={columns} dataSource={bestCoins} key={bestCoins.uuid}  size="middle" />
    </div>
  )
}

export default CryptoCardBest

import React from 'react'
import useCryptomarkets from '../../hooks/useCryptomarket';
import millify from "millify";
import useCryptoHistory from '../../hooks/useCryptoHistory';
import LineChart from '../graphs/LineChart';
import
{ Table }
from
"antd"
;
const Cryptotable = () => {
    let {coins,isloading} = useCryptomarkets()
    // console.log("inside-com-coin",coins)
    const columns = [
        {
          title: 'Rank',
          dataIndex: 'rank',
          key: 'rank',
          responsive : ["xs","sm","md","lg","xl","xxl"],
          align:"center",
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
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          responsive : ["xs","sm","md","lg","xl","xxl"],
          align:"center",
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          responsive : ["xs","sm","md","lg","xl","xxl"],
          align:"center",
          render :(text,record)=>`$${millify(record.price)}`
        },
        {
            title: 'Total24hv',
            dataIndex: '24hVolume',
            key: '24hVolume',
            responsive : ["xs","sm","md","lg","xl","xxl"],
            align:"center",
            render :(text,record)=>`$${millify(text)}`
        },
        {
            title: 'MarketCap',
            dataIndex: 'marketCap',
            key: 'marketCap',
            responsive : ["xs","sm","md","lg","xl","xxl"],
            align:"center",
             render :(text,record)=>`$${millify(text)}`
        },
        {
            title: 'Change',
            dataIndex: 'change',
            key: 'change',
            responsive : ["xs","sm","md","lg","xl","xxl"],
            align:"center",
             render :(text,record)=>(
                <span style={{color:parseFloat(text)<0?"red":"green"}}>
                    { text}
                </span>
             )
        } ,
        {
            title: 'Graph',
            dataIndex: 'uuid',
            key: 'graph',
            responsive : ["xs","sm","md","lg","xl","xxl"],
            align:"center",
            render : (coinid)=> <HistoricalData data={coinid}/>
        },
    ]

    // function for creating the historical data
    let HistoricalData=({data})=>{
      // console.log("Hdata:",data)// data-here is uuid for coins
      const {history,isloading,isError}=useCryptoHistory(data)
      // console.log("h:",history)
      if(isloading){
        return <div className='d-flex justify-content-center align-content-center'>
          <button class="btn btn-primary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </button>
        </div>
      }
      if(isError){
        return <h4>isError...</h4>
      }

      return <LineChart  data={history}/>
    }

  return (
    <>
    <div className='m-4'>
     
     <Table 
      dataSource={coins.map(coin => ({ ...coin, key: coin.uuid }))}
      columns={columns} 
      loading={isloading}
      bordered 
      scroll={{ x: "max-content" }} 
      />;
    
    </div>
    </>
  )
}

export default Cryptotable

// import React from 'react'
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { curveCardinal } from 'd3-shape';
// import useCryptoHistory from '../../hooks/useCryptoHistory';
// import styles from "../../../../styles/AreaChartModule.css"


// const AreaChart = ({coins}) => {
//   const {uuid:coinid,name,sympbol,iconUrl}=coins
//   let {history,isError,isLoading} = useCryptoHistory(coinid)
//   console.log("graph",history)
//   let coinHistory = history.map((point)=>(
//     {
//         data:new Date(point.timestamp * 1000).toLocaleDateString(),
//         price:point.price
//     }
//   ))

//   //  generating the colors based on prices
// let fistPrice=CoinHistory[0]?.price
// let lastPrice=CoinHistory[CoinHistory.length-1]?.price
// let color=fistPrice>=lastPrice?"green":"red"
// let strokecolor=fistPrice>=lastPrice?"Orange":"yellow"


//   return (
//     <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
//       <div   className='card border border-success shadow p-3 placeholder-glow' id={styles.areachartcard} >
//         <h5 className='card-title  p-2 border-bottom border-warning'>
//              <img src={iconUrl} alt="" width={"30px"} height={"30px"} style={{borderRadius:"50%"}} />
//              <span className='ms-2'>{name}</span>
//              <span className='ms-2'>{symbol}</span>
//              </h5>
//       <ResponsiveContainer >
//         <AreaChart
//         data={CoinHistory}
//           margin={{
//             top: 0,
//             right: 0,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           {/* <CartesianGrid strokeDasharray="3 3" /> */}
//           {/* <XAxis dataKey="date" /> */}
//           {/* <YAxis /> */}
//           <Tooltip />
//           <Area type="monotone" dataKey="price" stroke={strokecolor} fill={color} fillOpacity={0.5} />
//           <Area type={cardinal} dataKey="price" stroke={strokecolor} fill={color} fillOpacity={0.5} />
//         </AreaChart>
//       </ResponsiveContainer>
//       </div>

//     </div>
//   )
// }

// export default AreaChart
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
const AreaChart = ({data}) => {

 const Chartdata = {
        labels:data.map((item)=>new Date(item.timestamp*1000).toLocaleTimeString()),
        datasets: [
          {
            fill: false,
            label: 'price',
            data: data.map((item) =>parseFloat(item.price) ),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false, 
          },
        },
        scales:{
          x:{
            display:false,
          },
          y:{
            display:false
          }
        }
      };
  return (
    <div style={{width:"100%",height:50}}>
      <Line options={options} data={Chartdata} />;
    </div>
  )
}

export default AreaChart

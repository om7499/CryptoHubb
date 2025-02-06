import React from 'react'
// import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';


const LineBarChart = ({data}) => {
    //  preparing the data for the chart
 let CoinHistory=data.map((point)=>(
    {
        date:new Date(point.timestamp*1000).toLocaleString(),
        price:parseFloat(point.price)
    }
 ))
  return (
    <div className=''style={{width:"100%",height:"300px"}}>
       <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={CoinHistory}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          {/* <XAxis dataKey="name" scale="band" />
          <YAxis /> */}
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={50} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
          <Scatter dataKey="price" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineBarChart

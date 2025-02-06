import React from 'react'
import { useGetcryptoStatsQuery } from '../services/Cryptomarkets'
const useCryptostates = () => {
    const {data,isLoading,isError}= useGetcryptoStatsQuery()
    let stats = data?.data || {}
    // console.log(data)
      console.log("states : ",stats)
    // let GlobalStats = data ?.data?stats || {}
  return  {data,stats,isError,isLoading}
}

export default useCryptostates

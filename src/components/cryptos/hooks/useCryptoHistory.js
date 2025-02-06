import React from 'react'
import { useGetcryptoHistoryQuery } from '../services/Cryptomarkets'
const useCryptoHistory = (coinId,timePeriod="3m") => {
     const {data, isLoading, isError} = useGetcryptoHistoryQuery({coinId,timePeriod})
     let history = data?.data?.history ||[]
  return {isLoading,isError,history}
}

export default useCryptoHistory

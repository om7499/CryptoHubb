
import {useGetcryptoMarketsQuery} from "../services/Cryptomarkets"

const useCryptomarkets = ()=>{
    const {data, isLoading, isError} = useGetcryptoMarketsQuery()
    // optional chaining
    
    let coins = data?.data?.coins ||[]
    let GlobalStats = data?.data?.stats || {}
    // console.log("Coins Data:", coins);
    // console.log("Global Stats:", GlobalStats);
    // console.log("Is Loading:", isLoading);
    // console.log("Is Error:", isError);
    return {coins,GlobalStats,isLoading,isError}
}

export default useCryptomarkets
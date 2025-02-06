import React from 'react'
import { useGetGeneralNewsQuery } from '../Services/NewsServices'


const useNewsService =  (category="business") => {
  const {data,isloading,isError}=useGetGeneralNewsQuery({category})
  console.log(data)

 let news=data?.articles || []


 return {news ,isloading,isError}
}

export default useNewsService
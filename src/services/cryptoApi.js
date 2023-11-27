import create from '@ant-design/icons/lib/components/IconFont'
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoHeaders={
    'X-RapidAPI-Key': '3dca573ca4mshc724798898887bep1ed80fjsn1354ac37cee7',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url,headers :cryptoHeaders})


export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        })

    })
})

export const {
    useGetCryptosQuery,}= cryptoApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '3dca573ca4mshc724798898887bep1ed80fjsn1354ac37cee7',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
  
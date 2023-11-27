import { createApi } from "@reduxjs/toolkit/query";
import { CreateApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders={
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': ''
}


const baseUrl='https://crypto-news16.p.rapidapi.com'

const createRequest=(url)=>({url,headers : cryptoNewsHeaders})

export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:()=>(createRequest(`/news/top/5`))
        })
    })
})

export const {useGetCryptoNewsQuery,}=cryptoNewsApi;
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
//   headers: {
//     
//   }
// };
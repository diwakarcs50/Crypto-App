import React, { useEffect, useState } from 'react'

import { useGetCryptosQuery } from '../services/cryptoApi'
import {Card,Row,Col, Input} from 'antd';
import millify from 'millify';
import {Link} from 'react-router-dom'

const Cryptocurrencies = ({simplified}) => {
   const count=simplified ? 10 :100
   const {data:cryptosList,isFetching}=useGetCryptosQuery(count)
   const [cryptos,getcryptos]=useState([])

  const [searchTerm,setSearchTerm]=useState('')

  useEffect(()=>{
    const filterData=cryptosList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    getcryptos(filterData);

  },[searchTerm,cryptosList])

  if(isFetching) return 'Looading...'

  
  return (
    <>
    {!simplified && (
      <div className='search-crypto'>
        <Input placeholder='Search Cryptoocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>

    )}
   

  <Row gutter={[32,32]}  className='crypto-card-container'>
       {cryptos?.map((currency)=>(
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
            <Link to={`crypto/${currency.uuid}`}>
              <Card
              title={`${currency.rank}.${currency.name}`}
              extra={<img className='crypto-image' src={currency.iconUrl}/>}
              hoverable
              >
              <p>Price:{millify(currency.price)}</p>
              <p>MarketCap:{millify(currency.marketCap)}</p>
              <p>Change:{millify(currency.change)}%</p>
              </Card>
            </Link>

          </Col>
       ))}


     
    </Row>
    </>
    
  )
}

export default Cryptocurrencies
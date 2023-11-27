import React from 'react'
import millify from 'millify'
import { Typography ,Row,Col,Statistic} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import { Link } from 'react-router-dom/cjs/react-router-dom'



const {Title}=Typography
const Homepage = () => {

  const {data, isFetching}=useGetCryptosQuery(10)
  console.log(data)

  const globalStats=data?.data?.stats;


  if(isFetching) return 'Loading...'
  return (
   <>
    
    <Title level={2} className='heading'>
         Global Crypto Statistics
    </Title>
    <Row >
      <Col span={12}><Statistic title="Total Crytocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Totalmarket cap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24hr Val" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>

    </Row>

    <div className='home-heading-container'>
      <Title level={2} className='home-tile' >Top 10 Cryptos in World</Title>
      <Title level={3} className='show-more' ><Link to='/cryptocurrencies'>Show more</Link></Title>
    </div>
    <Cryptocurrencies simplified/>

    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Latest Crypto news</Title>
      <Title level={3} className='show-more'><Link to='/news'>Show more</Link></Title>
    </div>
    <News simplified/>

   </>
  )
}

export default Homepage
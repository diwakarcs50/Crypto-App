import React from 'react'
import {Select ,Typography ,Row,Col,Avatar ,Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const {Text,Title}=Typography
const {option}=Select
const News = () => {
  const {data:data}= useGetCryptoNewsQuery()
  console.log(data)
  return (
    <div>
      News
    </div>

  )
}

export default News
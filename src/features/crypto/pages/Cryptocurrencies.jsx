import React from 'react'
import { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input, Typography } from 'antd'

import { useGetCryptosQuery } from '../api/cryptoApi'
import { formatPrice } from '../../../utils/format'
import Loader from '../../../components/ui/Loader'

const { Title } = Typography

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins?.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)
  }, [cryptosList, searchTerm])

  if (isFetching) return <Loader />

  return (
    <>
      {!simplified && (
        <>
          <Title level={2} style={{ margin: '20px 0' }}>Cryptocurrencies</Title>
          <div className='search-crypto'>
            <Input
              placeholder='Search Cryptocurrency'
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </div>
        </>
      )}
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className='crypto-card'
            key={currency.uuid}
          >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                hoverable
              >
                <p>Price: {formatPrice(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies

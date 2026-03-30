import React from 'react'
import millify from 'millify'
import { Card, Row, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useGetTrendingCoinsQuery } from '../api/cryptoApi'
import { formatPrice } from '../../../utils/format'
import Loader from '../../../components/ui/Loader'

const { Title } = Typography

const TrendingCoins = () => {
  const { data: trendingList, isFetching } = useGetTrendingCoinsQuery()
  const coins = trendingList?.data?.coins

  if (isFetching) return <Loader />

  return (
    <>
      <div className="heading-container" style={{ margin: '20px 0' }}>
        <Title level={2} className="heading">Trending Cryptocurrencies</Title>
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                hoverable
              >
                <p>Price: {formatPrice(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
                <p>Tier: {currency.tier}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default TrendingCoins

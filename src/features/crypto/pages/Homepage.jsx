import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Card } from 'antd'
import { Link } from 'react-router-dom'
import { GlobalOutlined, AppstoreAddOutlined, DollarCircleOutlined, ThunderboltOutlined, FundOutlined } from '@ant-design/icons'

import { useGetCryptosQuery, useGetTrendingCoinsQuery } from '../api/cryptoApi'
import { formatPrice } from '../../../utils/format'
import Cryptocurrencies from './Cryptocurrencies'
// Component from another feature (will be moved in Phase 3)
import { News } from '../../news'
import Loader from '../../../components/ui/Loader'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const { data: trendingData } = useGetTrendingCoinsQuery()
  const globalStats = data?.data?.stats
  const trendingCoins = trendingData?.data?.coins

  if (isFetching) return <Loader />
  
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row gutter={[24, 24]} style={{ marginBottom: '30px' }}>
        <Col xs={24} sm={12} lg={8} xl={5}>
          <Card bordered={false} hoverable>
            <Statistic title='Total Cryptocurrencies' value={globalStats?.total} prefix={<GlobalOutlined style={{color: 'var(--pink)', marginRight: '8px'}}/>} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={5}>
          <Card bordered={false} hoverable>
            <Statistic title='Total Exchanges' value={globalStats?.totalExchanges ? millify(globalStats.totalExchanges) : 'N/A'} prefix={<AppstoreAddOutlined style={{color: 'var(--pink)', marginRight: '8px'}}/>} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={5}>
          <Card bordered={false} hoverable>
            <Statistic title='Total Market Cap' value={globalStats?.totalMarketCap ? millify(globalStats.totalMarketCap) : 'N/A'} prefix={<DollarCircleOutlined style={{color: 'var(--pink)', marginRight: '8px'}}/>} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={5}>
          <Card bordered={false} hoverable>
            <Statistic title='Total 24h Volume' value={globalStats?.total24hVolume ? millify(globalStats.total24hVolume) : 'N/A'} prefix={<ThunderboltOutlined style={{color: 'var(--pink)', marginRight: '8px'}}/>} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={4}>
          <Card bordered={false} hoverable>
            <Statistic title='Total Markets' value={globalStats?.totalMarkets ? millify(globalStats.totalMarkets) : 'N/A'} prefix={<FundOutlined style={{color: 'var(--pink)', marginRight: '8px'}}/>} />
          </Card>
        </Col>
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Trending Cryptocurrencies</Title>
        <Title level={3} className='show-more'><Link to='/trending'>Show More</Link></Title>
      </div>
      <Row gutter={[32, 32]}>
        {trendingCoins?.slice(0, 4).map((coin) => (
          <Col xs={12} sm={6} key={coin.uuid}>
            <Link to={`/crypto/${coin.uuid}`}>
              <Card size="small" title={coin.name}>
                <p>{formatPrice(coin.price)} USD</p>
                <p style={{ color: coin.change > 0 ? 'green' : 'red' }}>{coin.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage

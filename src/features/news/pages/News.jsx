import React, { useState } from 'react'
import { Select, Typography, Row, Col, Card } from 'antd'
import moment from 'moment/moment'

import { useGetCryptoNewsQuery } from '../api/cryptoNewsApi'
import { useGetCryptosQuery } from '../../crypto/api/cryptoApi'
import Loader from '../../../components/ui/Loader'

const { Text, Title } = Typography
const { Option } = Select

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
  // Accessing another feature's API
  const { data } = useGetCryptosQuery(100)

  const newsList = cryptoNews?.value || cryptoNews?.news || cryptoNews?.data || (Array.isArray(cryptoNews) ? cryptoNews : []);

  if (isFetching) return <Loader />

  if (error) {
    console.error('News API Error:', error);
    if (!simplified) {
      return (
        <div style={{ padding: '20px', background: '#fff2f0', border: '1px solid #ffccc7', borderRadius: '4px' }}>
          <Title level={4} type="danger">API Error</Title>
          <Text type="danger">Could not fetch news. This is likely due to missing or incorrect API keys in your hosting environment (Netlify/Vercel).</Text>
          <pre style={{ marginTop: '10px', fontSize: '12px' }}>{JSON.stringify(error, null, 2)}</pre>
        </div>
      );
    }
    return null;
  }

  if (!newsList?.length && simplified) return null;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <div style={{ margin: '20px 0' }}>
            <Title level={2} style={{ marginBottom: 0 }}>Crypto News</Title>
          </div>
          <div className='select-news' style={{ marginBottom: '20px' }}>
            <Select
              showSearch
              className='select-news'
              placeholder='Select a Crypto'
              optionFilterProp='children'
              onChange={(value) => (setNewsCategory(value))}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value='Cryptocurrency'>Cryptocurrency</Option>
              {data?.data?.coins.map((coin)=><Option key={coin.uuid || coin.name} value={coin.name}>{coin.name}</Option>)}
            </Select>
          </div>
          {!newsList?.length && <Text>No news found for this category.</Text>}
        </Col>
      )}
      {newsList.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel="noreferrer">
              <div className='news-content-container'>
                <Title className='news-title' level={4} style={{ marginBottom: '10px' }}>{news.title || news.name}</Title>
              </div>
              <p style={{ color: 'black', margin: '10px 0' }}>
                {
                  (news.desc || news.description || news.snippet || '').length > 150
                    ? `${(news.desc || news.description || news.snippet).substring(0, 150)}...`
                    : (news.desc || news.description || news.snippet)
                }
              </p>
              <div className='provider-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Text className='provider-name'>{news.source || news.provider?.[0]?.name || 'News'}</Text>
                </div>
                <Text style={{ fontSize: '12px' }}>{news.datePublished ? moment(news.datePublished).startOf('ss').fromNow() : (news.at || '')}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News

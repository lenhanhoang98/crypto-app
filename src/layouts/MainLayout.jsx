import React from 'react';
import { Layout, Typography, Space, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import icon from '../images/cryptocurrency.png';

const { Header, Sider, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', background: 'var(--bgBase)' }}>
      <Sider 
        width={260} 
        breakpoint="lg" 
        collapsedWidth="0"
        className="app-sider"
        style={{ borderRight: '1px solid var(--border)', background: 'var(--bgContainer)' }}
      >
        <Navbar />
      </Sider>
      
      <Layout style={{ background: 'transparent' }} className="app-layout">
        <Header className="app-header" style={{ 
          background: 'var(--bgContainer)', 
          padding: '0 24px', 
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <Avatar src={icon} size='large' />
          <Typography.Title level={3} style={{ margin: 0 }}>
            <Link to="/" style={{ color: 'inherit' }}>CryptoApp</Link>
          </Typography.Title>
        </Header>
        
        <Content style={{ padding: '24px 32px', minHeight: 280 }} className="app-content">
          {children}
        </Content>
        
        <Footer style={{ textAlign: 'center', background: 'transparent' }}>
          <Typography.Title level={5} style={{ marginBottom: 10 }}>
            Crypto App <br />
            All rights reserved
          </Typography.Title>
          <Space size="large">
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
          </Space>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

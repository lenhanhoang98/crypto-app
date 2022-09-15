import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar, List } from 'antd'
import { NavLink, Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import { useGetGlobalStatsQuery } from '../services/cryptoApi'
import Loader from './Loader'

import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [win, setWin] = useState(true)
    const [screenSize, setScreenSize] = useState(null)
    const { data, isFetching } = useGetGlobalStatsQuery()


    const bestCoin = []
    const newestCoin = []

    for (let i = 0; i < data?.data?.bestCoins?.length; i += 1) {
        bestCoin.push(data?.data?.bestCoins[i]);
    }
    for (let i = 0; i < data?.data?.newestCoins?.length; i += 1) {
        newestCoin.push(data?.data?.newestCoins[i]);
    }

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
            setWin(false)
        } else {
            setActiveMenu(true)
            setWin(true)
        }
    }, [screenSize])

    if (isFetching) return <Loader />

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <NavLink to='/'>Crypto App</NavLink>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme='dark'
                    items={[
                        {
                            icon: <HomeOutlined />,
                            label: (<NavLink to='/'>Home</NavLink>),
                        }, {
                            icon: <FundOutlined />,
                            label: (<NavLink to='/cryptocurrencies'>Cryptocurrencies</NavLink>),
                        },
                        // {
                        //     icon: <MoneyCollectOutlined />,
                        //     label: (<NavLink to='/exchanges'>Exchanges</NavLink>),
                        // },
                        {
                            icon: <BulbOutlined />,
                            label: (<NavLink to='/news'>News</NavLink>),
                        }
                    ]}
                />
            )}
            {win ? <>
                <List
                    size="small"
                    header={<div style={{ textAlign: 'center', color: 'white' }}>Best coin in 24h</div>}
                    dataSource={bestCoin}
                    renderItem={(item) =>
                        <List.Item style={{ color: 'white', borderBottom: '0px' }}>
                            <Link key={item?.uuid} to={`/crypto/${item?.uuid}`}>
                                <img style={{ width: '25px', marginRight: '5px' }} src={item?.iconUrl} />
                                {item?.symbol}
                                <a style={{ textAlign: 'right' }}>
                                    {/* {item?.uuid} */}
                                </a>
                            </Link>
                        </List.Item>}
                />
                <List
                    size="small"
                    header={<div style={{ textAlign: 'center', color: 'white' }}>Newest coin</div>}
                    dataSource={newestCoin}
                    renderItem={(item) =>
                        <List.Item style={{ color: 'white', borderBottom: '0px' }}>
                            <Link key={item?.uuid} to={`/crypto/${item?.uuid}`}>
                                <img style={{ width: '25px', marginRight: '5px' }} src={item?.iconUrl} />
                                {item?.symbol}
                                <a style={{ textAlign: 'right' }}>
                                </a>
                            </Link>
                        </List.Item>}
                />
            </> : <></>}
        </div>
    )
}

export default Navbar
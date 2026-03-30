import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize < 992) { // 992 is antd 'lg' breakpoint
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    const menuItems = [
        {
            key: '/',
            icon: <HomeOutlined />,
            label: <Link to='/'>Home</Link>,
        }, 
        {
            key: '/cryptocurrencies',
            icon: <FundOutlined />,
            label: <Link to='/cryptocurrencies'>Cryptocurrencies</Link>,
        },
        {
            key: '/trending',
            icon: <ThunderboltOutlined />,
            label: <Link to='/trending'>Trending</Link>,
        },
        {
            key: '/news',
            icon: <BulbOutlined />,
            label: <Link to='/news'>News</Link>,
        }
    ];

    return (
        <div className='nav-container' style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
                {activeMenu && (
                    <Menu 
                        theme='dark'
                        mode='inline'
                        selectedKeys={[location.pathname]}
                        items={menuItems}
                        style={{ borderRight: 0, background: 'transparent' }}
                    />
                )}
            </div>
        </div>
    )
}

export default Navbar

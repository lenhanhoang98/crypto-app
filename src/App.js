import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts'
import { Homepage, Cryptocurrencies, CryptoDetails, TrendingCoins } from './features/crypto'
import { News } from './features/news'

import './App.css'

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
        <Route path='/crypto/:coinId' element={<CryptoDetails />} />
        <Route path='/trending' element={<TrendingCoins />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </MainLayout>
  )
}

export default App
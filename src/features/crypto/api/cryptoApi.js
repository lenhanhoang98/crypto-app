import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-access-token': process.env.REACT_APP_RAPIDAPI_KEY
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinranking.com/v2' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),
    getGlobalStats: builder.query({
      query: () => createRequest(`/stats`)
    }),
    getTrendingCoins: builder.query({
      query: () => createRequest(`/coins/trending`)
    }),
  })
})


export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetGlobalStatsQuery,
  useGetTrendingCoinsQuery,
} = cryptoApi;

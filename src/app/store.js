import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../features/crypto/api/cryptoApi'
import { cryptoNewsApi } from '../features/news/api/cryptoNewsApi'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),
});
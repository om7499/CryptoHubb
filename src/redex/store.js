import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'

import { CryptomarketsApi } from '../components/cryptos/services/Cryptomarkets'
import { NewsApi } from '../components/news/Services/NewsServices'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [CryptomarketsApi.reducerPath]: CryptomarketsApi.reducer,
    [NewsApi.reducerPath]: NewsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.NewsApi.middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CryptomarketsApi.middleware,NewsApi.middleware),
})


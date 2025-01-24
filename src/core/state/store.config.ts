import { configureStore } from '@reduxjs/toolkit'

import { env } from '@app/shared/configs/environment.config'
import { storeLogger } from '../middlewares/store-logger.middleware'
import { reducer } from './reducer.config'

/**
 * Store configuration.
 */
export const store = configureStore({
  devTools: env.MODE !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(storeLogger),
  reducer
})

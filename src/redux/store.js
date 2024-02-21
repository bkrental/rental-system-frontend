import { combineReducers, configureStore } from '@reduxjs/toolkit'
import configSlice from './features/config/configSlice'
import authSlice from './features/auth/authSlice'
import { apiSlice } from '@api/apiSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'config'],
}


const rootReducer = combineReducers({
  config: configSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PURGE', 'persist/FLUSH'],

      },
    }).concat(apiSlice.middleware)
  },
  devTools: true,
})

export const persistor = persistStore(store)

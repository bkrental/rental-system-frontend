import { combineReducers, configureStore } from '@reduxjs/toolkit'
import configSlice from './features/config/configSlice'
import authSlice from './features/auth/authSlice'
import postSlice from './features/post/postSlice'
import { apiSlice } from '@api/apiSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  timeout: 2000,
  whitelist: ['auth', 'config'],
}

const persistOptions = {
  manualPersist: true
}


const rootReducer = combineReducers({
  config: configSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice,
  post: postSlice,
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

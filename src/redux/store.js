import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './features/header/headerSlice'
import authSlice from './features/auth/authSlice'
import { apiSlice } from '@api/apiSlice'


export const makeStore = () => {
    return configureStore({
        reducer: {
            header: headerSlice,
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authSlice,
        },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(apiSlice.middleware)
        },
        devTools: true,
    })
}
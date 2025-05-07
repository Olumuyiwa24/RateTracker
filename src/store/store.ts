import {configureStore} from '@reduxjs/toolkit'
import currencySlice from './currencySlice'
import themeSlice from './themeSlice'

const store = configureStore({
    reducer:{
        currency : currencySlice,
        theme: themeSlice
    }
})

export default store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
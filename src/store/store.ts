import {configureStore} from '@reduxjs/toolkit'
import currencySlice from './currencySlice'


const store = configureStore({
    reducer:{
        currency : currencySlice,
       
    }
})

export default store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
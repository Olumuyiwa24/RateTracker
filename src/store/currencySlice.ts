import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {fetchRates} from '../utils/exchange'

interface CurrencyState {
    rates: Record<string, number>
    history: string[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: CurrencyState = {
    rates: {},
    history: [],
    status: 'idle'
}

export const fetchCurrencyRates = createAsyncThunk<Record<string, number>, string>(
    'currency/fetchRates',
    async(base: string): Promise<Record<string, number>> => {
        return fetchRates(base)
    }
)

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers : {
        addConversion : (state, action) => {
            state.history.unshift(action.payload)
        }
    },

    //extra reducers
    extraReducers: (builder) => {
        builder
          .addCase(fetchCurrencyRates.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
            state.status = 'idle';
            state.rates = action.payload; 
          })
          .addCase(fetchCurrencyRates.rejected, (state) => {
            state.status = 'failed';
            state.rates = {};
          });
        }
})

export const {addConversion} = currencySlice.actions

export default currencySlice.reducer

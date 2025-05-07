import { createSlice } from "@reduxjs/toolkit";

interface themeSliceProps {
    mode: string
}

const initialState :themeSliceProps = {
    mode: "dark"
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
        setTheme: (state, action) => {
            state.mode = action.payload
        }
    }
})
export const {toggleTheme, setTheme} = themeSlice.actions
export default themeSlice.reducer
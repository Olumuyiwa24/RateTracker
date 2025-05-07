import { toggleTheme } from "../../store/themeSlice"
import { RootState, AppDispatch } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"

function ToggleTheme() {

    //hook to dispatch actions
    const dispatch = useDispatch<AppDispatch>()

    //hook to get our state from redux 
    const mode = useSelector((state: RootState) => state.theme.mode)
    return (
        <button onClick={() => dispatch(toggleTheme())}>
            {mode === 'light' ? 'darkMode' : 'lightMode'}
        </button>
    )
}

export default ToggleTheme
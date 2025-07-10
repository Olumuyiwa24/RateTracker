import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { RootState } from "../store/store";


const ThemeToggle = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state: RootState) => state.theme.mode)

    return (
        <div className="relative flex items-center justify-end p-4 sm:p-2 w-full bottom-40">
            <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm text-yellow-600 dark:text-gray-100 hidden sm:inline">
                <span className="mr-2">
                    {currentTheme === "light" ? "Light" : "Dark"} Mode
                </span>
                    
            </span>
            </div>

            <button
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-pointer transition-colors duration-300"
                onClick={() => dispatch(toggleTheme())}
                aria-label="Toggle Theme"
            >
                {currentTheme === "light" ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m8.66-9.34l-.707.707M5.05 5.05l-.707.707m14.142 14.142l-.707-.707M5.05 18.95l-.707-.707M21 12h-1M4 12H3m16.95-7.05l-.707-.707M5.05 18.95l-.707-.707M18.95 5.05l-.707-.707M7.05 18.95l-.707-.707"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m8.66-9.34l-.707.707M5.05 5.05l-.707.707m14.142 14.142l-.707-.707M5.05 18.95l-.707-.707M21 12h-1M4 12H3m16.95-7.05l-.707-.707M5.05 18.95l-.707-.707M18.95 5.05l-.707-.707M7.05 18.95l-.707-.707"
                        />
                    </svg>
                )}
            </button>   
        </div>
)}

export default ThemeToggle;
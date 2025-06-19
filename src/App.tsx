import { AppRouter } from './router/index.tsx'
import './App.css'
import { useSelector } from 'react-redux'
import { RootState } from './store/store.ts'
import ThemeToggle from './components/themeToggle.tsx'
import { useEffect } from 'react'

export default function App() {
  const mode = useSelector((state: RootState) => state.theme.mode)
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(mode);
  }, [mode]);
  return(
    <div className={ `${mode === 'dark' ? 'dark' : 'light'} pt-42`}>
      <ThemeToggle />
      <AppRouter />
    </div>
      
  )
}


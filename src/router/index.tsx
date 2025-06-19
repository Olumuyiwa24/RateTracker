import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { HomePage } from '../pages/Home'
import ConversionPage from '../pages/ConversionPage'
import LearnMore from '../pages/LearnMore'

export function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/convert' element={<ConversionPage />}/>
            <Route path="/learn" element={< LearnMore/>}/>
        </Routes>
    </Router>
  )

}
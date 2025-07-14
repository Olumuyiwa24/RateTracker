import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/Home'
import ConversionPage from '../pages/ConversionPage'
import LearnMore from '../pages/LearnMore'
import TransactionHistory from '../pages/TransactionHistory'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/convert',
    element: <ConversionPage />
  },
  {
    path: '/learn',
    element: <LearnMore />
  },
  {
    path: "/history",
    element: <TransactionHistory />,
  },
])


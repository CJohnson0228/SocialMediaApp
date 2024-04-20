import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import ErrorPage from '../pages/ErrorPage'
import Landing from '../pages/Landing'
import MainLayout from '../pages/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
])

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/landingPage/Home'
import Docs from './Pages/docs/docs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/docs',
    element: <Docs />
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

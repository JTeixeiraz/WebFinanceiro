import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Adicionar from './pages/Adicionar.tsx'
import Gastos from './pages/Gastos.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path: "/Adicionar",
    element: <Adicionar />
  },
  {
    path: "/Gastos",
    element: <Gastos />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"About",
        element: <About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

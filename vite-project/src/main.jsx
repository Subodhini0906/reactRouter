import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github, { githubInfo } from './components/Github.jsx'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

/*const router=createBrowserRouter([
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
      },
      {
        path:"contact",
        element: <Contact/>
      }
      
    ]
  }
])*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfo} path='/git' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

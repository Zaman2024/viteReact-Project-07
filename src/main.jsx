import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
// import Github from './components/Github.jsx'
import Github, { GithubData } from './components/Github.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={<Layout/>}>
      <Route index element = {<Home />} />
      <Route path='About' element = {<About />} />
      {/* <Route path='Github' element = {<Github/>} /> */}
      <Route loader={GithubData} path='Github' element = {<Github/>} />
      <Route path='Contact' element = {<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

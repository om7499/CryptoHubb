import React from 'react'
import Navbar from '../components/common/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Markets from '../pages/LiveMarket'

const AppRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/market' element={<Markets/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blog/>} />
       
      </Routes>
    </>
  )
}

export default AppRoutes

import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

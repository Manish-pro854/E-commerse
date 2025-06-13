import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Shop from './pages/Shop/Shop'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

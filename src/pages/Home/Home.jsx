import React from 'react'
import Nav from '../../Components/Nav/Nav'
import bg from "../../assets/bg0.gif"
import "./Home.css"
import { category } from '../../Category'

function Home() {
  return (
    <div className='home'>
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>

     <div className="category-section">

      {category.slice(0,5).map((item)=>(
        <div className="category-card">
          <img src={item.image} alt="" />
          <span>{item.name}</span>
        </div>
      ))}

     </div>
      
      <h1>Trending Products</h1>
    </div>
  )
}

export default Home

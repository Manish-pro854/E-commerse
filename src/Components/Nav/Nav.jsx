import React from 'react'
import { FaShopify } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./Nav.css"
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>

      <div className="top-nav">
        <Link to="/"><div className="logo">
          <span>V-Shop</span>
          <FaShopify />
        </div></Link>
        <form className='search-box'>
          <input type="text" placeholder='Search Items..'/>
          <button><IoSearchOutline /></button>
        </form>
        <div className="cart-box">
          <FiShoppingCart />
          <span>0</span>
        </div>
      </div>

      <div className="bottom-nav">
        <Link to="/"><li>Home</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </div>

    </div>
  )
}

export default Nav

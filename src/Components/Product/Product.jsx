import React from 'react'
import "./Product.css"
import image1 from "../../assets/image1.jpg"

function Product({name,image,price,id}) {
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="product-details">
        <span className='name'>{name}</span>
        <span className="price">Rs {price}/-</span>
        <button>Add +</button>
      </div>
    </div>
  )
}

export default Product

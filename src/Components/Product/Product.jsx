import React from 'react'
import "./Product.css"
import image1 from "../../assets/image1.jpg"
import { useDispatch } from 'react-redux'
import { AddItem } from '../../Redux/Cartslice'

function Product({name,image,price,id}) {
  let dispatch = useDispatch()
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="product-details">
        <span className='name'>{name}</span>
        <span className="price">Rs {price}/-</span>
        <button onClick={()=>{
          dispatch(AddItem({name:name,image:image,price:price,id:id}))
          alert("Product Added succesfully..")
        }}>Add +</button>
      </div>
    </div>
  )
}

export default Product

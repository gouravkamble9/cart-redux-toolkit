import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
  const products=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  
  const handleRemove=(pro)=>{
    dispatch(remove(pro))
  }
  return (
    <div className='container'>
      <h3>Cart</h3>
      <div className='cartItems'>
        {
          products.map((item,index)=>(
            <div className='cart_con' key={index}>
              <img src={item.image} alt="" />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button className='btn' onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
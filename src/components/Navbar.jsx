import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


const Navbar = () => {

  const items=useSelector((state)=>state.cart)

  return (
    <div className='navbar container'>
        <span className='logo'>STORE</span>
        <div className='navLeft'>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
            <span className='cartCount'>
                    Cart Items:{items.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar
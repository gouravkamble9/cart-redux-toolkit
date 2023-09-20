import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='container'>
        <h2 className='heading'>Welcome to the Store</h2>
        <section>
            <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home
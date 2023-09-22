import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUS } from '../store/productSlice'


const Products = () => {
    const [page,SetPage]=useState(1)
    const dispatch=useDispatch()
   const {data,status}=useSelector(state=>state.product)
    useEffect(()=>{
        console.log(data)

        dispatch(fetchProducts())
        // const fetchProducts=async ()=>{
        //         const res=await fetch('https://fakestoreapi.com/products')
        //         const data=await res.json()
        //         SetProducts(data)
        // }

        // fetchProducts()
    },[])

    const handleAdd=(product)=>{
        dispatch(add(product))
    }

    if(status === STATUS.LOADING){
        return <h2>Loading</h2>
    }

    if(status === STATUS.ERROR){
        return <h2>Error</h2>
    }

  return (
    <>
    <div className='pro-sec'>
        {
            data.slice(page*4-4,page*4).map((item,index)=>(
                <div className='card' key={index}>
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                    <h4>$ {item.price}</h4>
                    <button className='btn'onClick={()=>handleAdd(item)}>Add to Cart</button>
                </div>   
            ))
        }
    </div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px',cursor:'pointer'}}>
    {[...Array(data.length/4)].map((item,key)=>(
        <span onClick={()=>SetPage(key+1)}>{key+1}</span>
    ))}
</div>
</>
  )
}

export default Products
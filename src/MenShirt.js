import React from 'react'
import Shirt from "./data.json"

const MenShirt = () => {
  return (
    <div className='shirts'>{
        Shirt.mensshirt.map(product =>{
          return(
            <div className='property'>
            <div className='product'>
             <img className='product-img' src={product.image} alt="shirt"/>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
            </div>
          )
        })
      } </div>
  )
}

export default MenShirt
import React from 'react'
import women from "./data.json"

const WomenWestern = () => {
  return (
    <div className='shirts'>{
        women.womenwestern.map(product =>{
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

export default WomenWestern
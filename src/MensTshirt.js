import React from 'react'
import Tshirt from "./data.json"

const MensTshirt = () => {
  return (
    <div>
        <div className='shirts'>{
        Tshirt.menstshirt.map(product =>{
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
    </div>
  )
}

export default MensTshirt
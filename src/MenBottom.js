import Menbottom from "./data.json"

import React from 'react'

const MenBottom = () => {
  return (
    <div className='shirts'>{
        Menbottom.menbottom.map(product =>{
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

export default MenBottom
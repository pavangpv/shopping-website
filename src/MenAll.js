import React from 'react'
import MenBottom from './MenBottom'
import MenShirt from './MenShirt'
import MensTshirt from './MensTshirt'

const MenAll = () => {
  return (
    <div className='all'>
        <MenShirt />
        <MensTshirt />
        <MenBottom />
    </div>
  )
}

export default MenAll
import React from 'react'
import Category from './Category'
import Shimmer from './Shimmer'

const Maincontainer = () => {
  return (
    <div className='col-span-12'>
        <Category/>
        <Shimmer/>
    </div>
  )
}

export default Maincontainer
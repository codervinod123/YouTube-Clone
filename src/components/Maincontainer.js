import React from 'react'
import Category from './Category'
import Vediocontainer from './Vediocontainer'

const Maincontainer = () => {
  return (
    <div className='col-span-10'>
        <Category/>
        <Vediocontainer/>
    </div>
  )
}

export default Maincontainer
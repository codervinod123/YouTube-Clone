import React from 'react'
import {cataegory} from "../utils/Credentials";

const Category = () => {
  
  return (
    <div className='flex pt-4 gap-2'>
        {
         cataegory.map((data)=>{
          return(
            <button className='bg-gray-300 px-4 rounded-sm w-[content-fit] items-center justify-center '>
                  {data}
            </button>  
          )
         })
        }
    </div>
  )
}

export default Category
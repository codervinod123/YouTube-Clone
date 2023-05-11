import React from 'react'
import {RxHamburgerMenu} from "react-icons/rx"

const Shimmer = () => {
  return (

   <div className='bg-zinc-900 '>
     <div className='flex justify-between px-8 p-4 '>
            <button className="rounded-full hover:bg-zinc-700 text-zinc-500">
               <RxHamburgerMenu
                className='cursor-pointer'
                title='hamberger menu'
                size="1.5rem"
               />
             </button>

            <div className='flex gap-4 '>
               <div className='h-8 w-8 bg-zinc-700 rounded-full'></div>
               <div className='h-8 w-8 bg-zinc-700 rounded-full'></div>
               <div className='h-8 w-8 bg-zinc-700 rounded-full'></div>
               <div className='h-8 w-8 bg-zinc-700 rounded-full'></div>
            </div>
    </div>

     <div className='grid grid-cols-3 col-span-3 pt-12 pl-20 pr-8'>
      {
            new Array(18).fill(0).map((item, index) => {
            return (
         
                <div className='flex flex-col justify-normal mx-auto py-6'>
                        <div className='bg-zinc-500 h-40 w-72 rounded-lg'></div>
                        <div className='bg-zinc-500 h-8 w-52 rounded-lg my-3'></div>
                        <div className='bg-zinc-500 h-6 w-40 rounded-lg '></div>
                </div>
            )
          })
        }
    </div>
   </div>
  )
}

export default Shimmer
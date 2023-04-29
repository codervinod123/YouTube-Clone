import React from 'react'
import {MdOutlineSubscriptions} from "react-icons/md"
import {AiFillHome} from "react-icons/ai"
import youtube_shorts from "../assets/YouTube-Shorts-Black.svg"

const Sidebar = () => {
  return (
    <div className='col-span-2 '>
          <div className='flex flex-col'>
              <div className='flex items-center px-4 py-2 pl-4 rounded hover:bg-slate-200'>
                 <AiFillHome/>
                 <span>Home</span>
              </div> 
              <div className='flex items-center px-4 py-2 pl-4 rounded hover:bg-slate-200'>
                 <img 
                    className='h-8'
                    src={youtube_shorts}
                    alt="shorts" />
                 <span>Home</span>
              </div> 
              <div className='flex items-center px-4 py-2 pl-4 rounded hover:bg-slate-200'>
                 <MdOutlineSubscriptions/>
                 <span>Home</span>
              </div> 

          </div>
    </div> 
  )
}

export default Sidebar
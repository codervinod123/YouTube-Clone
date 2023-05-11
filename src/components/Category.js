import React,{useState} from 'react'
import { tags } from '../utils/constants'



const Category = () => {

  const [active, setActive] = useState("All");
  const handkeChoseCategoryClick=(tag)=>{
      setActive(tag);
      console.log(active);
  }

  return (
    <div className='flex mx-4 pt-2 text-sm text-white items-center '>
        <div className='tags-wrapper flex w-full overflow-x-hidden overflow-y-hidden'>
           {
              tags.map((tag,index)=>{
                return(
                        <button 
                             key={index} 
                             className={`px-3 w-fit py-2 cursor-pointer  mx-2 rounded-lg ${active===tag ? "bg-white text-black" : "bg-zinc-700"} `}
                             onClick={()=>handkeChoseCategoryClick(tag)}
                             >
                           <span className='whitespace-nowrap'>{tag}</span>
                        </button>
                )
              })
           }
        </div>
    </div>
  )
}

export default Category
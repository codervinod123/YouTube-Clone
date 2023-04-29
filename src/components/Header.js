import React from 'react'
import logo_light_theme from "../assets/logo_light_theme.webp";
import userImage from "../assets/image_vinod.jpg";
import  {RxHamburgerMenu}  from 'react-icons/rx';
import  {CiSearch}  from 'react-icons/ci';
import  {FaUserCircle}  from 'react-icons/fa';
import  {IoIosNotificationsOutline}  from 'react-icons/io';


const Header = () => {
  return (
    <div className='grid grid-flow-col justify-between items-center shadow-lg px-6 py-2'>
         
         <div className='flex items-center col-span-1'>
            <RxHamburgerMenu 
               fontSize={"40px"}
               className="rounded-full p-2 hover:bg-gray-500 ease-in-out duration-300 hover:text-white"
            />
            <img 
              className="w-52 pl-4 lg:w-36" 
               src={logo_light_theme} 
               alt="light_logo" 
               title='logo'
            />
         </div>


         <div className='flex justify-center col-span-9'>
            <input 
                 type="text"
                 className='border-[1px] border-gray-800 rounded-l-full p-2 focus:outline-none px-4'
                 placeholder='Search'
             />
            <button className='border-[1px] border-gray-800 rounded-r-full p-2 px-4'>
               <CiSearch fontSize={"20px"}/>
            </button>
         </div>


         <div className='flex gap-3 col-span-2'>

            <FaUserCircle 
                fontSize={"40px"}
                className="rounded-full p-2 hover:bg-gray-500 ease-in-out duration-300 hover:text-white"
              />
            <IoIosNotificationsOutline
               fontSize={"40px"}
               className="rounded-full p-2 hover:bg-gray-500 ease-in-out duration-300 hover:text-white"            
            />

            <img 
               className='h-8 rounded-full' 
               src={userImage}
               alt="user_image"
               title='logo'
            />

         </div>

    </div>
  )
}

export default Header
import React from 'react'
import logo_light_theme from "../assets/logo_light_theme.webp";
import userImage from "../assets/image_vinod.jpg";
import  {RxHamburgerMenu}  from 'react-icons/rx';
import  {CiSearch}  from 'react-icons/ci';
import  {FaUserCircle}  from 'react-icons/fa';
import  {IoIosNotificationsOutline}  from 'react-icons/io';


const Header = () => {
  return (
    <div className='grid grid-flow-col'>
         <div className='flex'>
            <RxHamburgerMenu fontSize={"40px"}/>
            <img 
               className='h-10' 
               src={logo_light_theme} 
               alt="light_logo" 
            />
         </div>

         <div>
            <input type="text" />
            <button><CiSearch fontSize={"40px"}/></button>
         </div>

         <div className='flex'>
            <FaUserCircle fontSize={"40px"}/>
            <IoIosNotificationsOutline/>
            <img src={userImage} alt="user_image" />
         </div>

    </div>
  )
}

export default Header
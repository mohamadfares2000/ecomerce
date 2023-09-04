import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import logo from '../img/logo ecommerce.png'; // with import
import { Link } from 'react-router-dom';



const Header = () => {
  const [isActive , setIsActive] = useState(false)
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive (true) : setIsActive (false);
    })
  })
  return <div className={`${isActive? 'bg-white ' : 'bg-pink-200'} flex justify-between items-center w-full  top-0 fixed`} >
    <Link to={'/'} className='w-16 ml-10' >
      <img  src={logo}/>
    </Link>
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative mr-10'>
      <BsBag className='text-2xl'/>
      <div className='absolute bg-red-500 right-0 top-3 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center text-white'>{itemAmount}</div>
      </div>
  </div>;

};

export default Header;

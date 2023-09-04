import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { IoMdArrowForward } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from '../contexts/CartContext';

import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {cart,clearCart,itemAmount,finalTotal} = useContext(CartContext)
  const {isOpen,handelClose} = useContext(SidebarContext);

  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-scroll	`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount}) 
      </div>

      <div className='cursor-pointer w-8 h-8 flex justify-center items-center'>
           <IoMdArrowForward className='text-2xl' onClick={handelClose}/>
      </div>
    </div>
    {cart.map((item)=>{
     return <h1 key={item.id}><CartItem item={item}></CartItem></h1>
    })}
    <div className=' flex flex-col gap-y-3 py-4 mt-4 '>
      <div className=' flex w-full justify-between items-center'>
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span>$ {parseFloat(finalTotal).toFixed(2)}
        </div>
        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
          <BsFillTrashFill/>
        </div>
      </div>
      <Link to={'/'} className='bg-gray-200 flex p-4 justify-center items-center w-full font-medium text-primary'>View Cart</Link>
      <Link to={'/'} className='bg-primary flex p-4 justify-center items-center w-full font-medium text-white'> CheckOut</Link>
    </div>
  </div>;
};
 
export default Sidebar;

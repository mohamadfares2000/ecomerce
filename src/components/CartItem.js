import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const {id , title , image , price , amount} = item
  const{removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext)

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img src={image} className='max-w-[80px]'></img>
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>     
            <div className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' onClick={()=>removeFromCart(id)}/></div>
            </div>

            <div className=' flex gap-x-2 h-[36px] text-sm justify-between'>         
             <div className=' flex p-4 max-w-[100p] items-center h-full border text-primary font-medium  '>
              
              <div className='  flex  justify-center items-center cursor-pointer '  onClick={()=>decreaseAmount(item)} >
                 <IoMdRemove/>
              </div>

              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>

                <div className='flex flex-1 h-full justify-center items-center cursor-pointer' onClick={()=>increaseAmount(item)}>
                  <IoMdAdd/>
                </div>  


              </div>

              <div className='h-full flex  items-center px-2 '>    
                <div className=' flex justify-end items-center  font-medium '>{price}</div>
                <div className='flex-1 flex justify-end items-center text-primary font-medium ml-5'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
              </div>
            </div>


        </div>
      </div>
    </div>
  )
};

export default CartItem;

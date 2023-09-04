import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart , setCart] = useState([]);
  const [itemAmount , setItemAmount] = useState(0);
  const [finalTotal,setFinalTotal] = useState(0);

  const addToCart = (product)=> {
    const newItem = {...product , amount : 1};
    const cartItem = cart.find(item =>{
      return item.id === product.id
    })
    if(cartItem) {
      const newCart = [...cart].map((item)=>{
        if(item.id === product.id) {
          return {...item , amount : cartItem.amount +1}
        } else {
          return item;
        }
       });
      setCart(newCart)
    }else {
      setCart([...cart , newItem]);
    }
  };

  useEffect(()=>{
    const total =  cart.reduce((accumulator, currentValue) =>{
      return accumulator +  currentValue.price * currentValue.amount
    },0);
    setFinalTotal(total)
  },[cart])


  const removeFromCart = (id) =>{
    const newCart =cart.filter((item)=>{
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (product) => {
    const cartItem = cart.find(item =>{
      return item.id === product.id
    })
    addToCart(cartItem)
  }

  const decreaseAmount = (product) => {
    const cartItem = cart.find(item =>{
      return item.id === product.id
    })
    
   if(product.amount === 1 ){
    removeFromCart(product.id)
   }else {
    const newCart = [...cart].map((item)=>{
      if(item.id === product.id) {
        return {...item , amount : cartItem.amount - 1}
      } else {
        return item;
      }
     });
    setCart(newCart)
   }
  }

  useEffect(()=>{
    const objectLength = Object.entries(cart).length;
    setItemAmount(objectLength)
  },[cart])

  return <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,finalTotal}}>{children}</CartContext.Provider>;

}

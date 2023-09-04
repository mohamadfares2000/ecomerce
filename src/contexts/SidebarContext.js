import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
  
  const [isOpen , setIsOpen] = useState(false);

  const handelClose = ()=>{
    setIsOpen(false)
  }
    return(
      <SidebarContext.Provider value={{isOpen,setIsOpen,handelClose}}>{children}</SidebarContext.Provider>
    )
};


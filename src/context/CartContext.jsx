import React, { createContext, useEffect, useState } from 'react'

export let cartContext = createContext(0)

export default function CartProvider({children}) {

    const [cart , setCart] = useState([])

    const addToCart = () =>{
        console.log("hello ana henna ")
    }

  return (
    <cartContext.Provider value={{addToCart}}>{children}</cartContext.Provider>
  )
}

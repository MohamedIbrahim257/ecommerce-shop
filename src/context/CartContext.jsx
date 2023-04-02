import React, { createContext, useContext, useEffect, useState } from 'react'

export let cartContext = createContext(0)

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addToCart = (product , id) => {
        let newItems = { ...product, amount: 1 }
        const cartItems = cart.find((item) => {
            return item.id === id
        })
        if (cartItems) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItems.amount + 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }else{
            setCart([...cart , newItems])
        }
    }
    console.log(cart)

    return (
        <cartContext.Provider value={{ addToCart , cart , setCart }}>{children}</cartContext.Provider>
    )
}

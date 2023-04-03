import React, { createContext, useContext, useEffect, useState } from 'react'

export let cartContext = createContext(0)

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [totalPrice , setTotalPrice] = useState(0);


    // total price function 

    const totalPrices = () =>{

        const updateTotalPrice = cart.reduce((accumlator , currentPrice)=>{
            return accumlator + currentPrice.price * currentPrice.amount
        },0)
        setTotalPrice(updateTotalPrice)
    }



    // update cart amount 

    useEffect(() => {
        if (cart) {
            const updateAmont = cart.reduce((accumlator, currentItems) => {
                return accumlator + currentItems.amount
            }, 0)
            setItemAmount(updateAmont)
          
        }
        totalPrices()
    }, [cart])


    //add Products to cart

    const addToCart = (product) => {
        let newItems = { ...product, amount: 1 }
        let cartItems = cart.find((item) => {
            return item.id === product.id

        })
        if (cartItems) {
            let newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, amount: cartItems.amount + 1 };
                } else {
                    return item
                }
            })
            setCart(newCart)

        } else {
            setCart([...cart, newItems])
        }
    }
    console.log(cart)

    // Remove product from cart 

    const removeProductsCart = (id) => {
        const cartItems = cart.filter((item) => {
            return item.id !== id
        })
        setCart(cartItems)
    }


    //Remmove all Products 

    const RemoveAllProducts = () => {

        return setCart([])

    }

    //increase quantity 

    const increaseQty = (id) => {
        const items = cart.find((item) =>
            item.id === id

        )
        addToCart(items, id)
    }

    // decrease qty 

    const decreaseQty = (id) => {
        const items = cart.find((item) => { return item.id === id }
        )
        if (items) {
            const newItems = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: items.amount - 1 }
                } else {
                    return item
                }
            });
            setCart(newItems)
        }
        if (items.amount < 2) {
            removeProductsCart(id)
        }

    }







    return (
        <cartContext.Provider
            value={{
                addToCart,
                cart,
                setCart,
                removeProductsCart,
                RemoveAllProducts,
                increaseQty,
                decreaseQty,
                itemAmount,
                setItemAmount,
                totalPrice
            }}>{children}</cartContext.Provider>
    )
}

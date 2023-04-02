import React, { useState } from 'react'

export default function text() {
   
    const [cart , setCart] = useState([])

    const addToCart = (product , id) =>{

       const newItems = {...product , amount : 1}

       const newCart = cart.find((item)=>{
        return item.id === id
       })

       if(newCart){
        const cartItems = [...cart].map((item)=>{
            if(item.id === id){
                return {...item , amount : newCart.amount +1}
            }else{
                return item
            }
        })
        setCart(cartItems)
       }

      setCart([...cart , newItems])


    }

    return (
        <div>

        </div>
    )
}

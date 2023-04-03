import React from 'react'
import { useContext } from 'react'
import { sidebarContext } from '../context/SidebarContext'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash } from 'react-icons/fi'
import CartItem from './CartItem'
import { cartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    let { isOpen, setIsOpen, handleClosing } = useContext(sidebarContext)
    let { cart, setCart, RemoveAllProducts, totalPrice ,itemAmount  } = useContext(cartContext)
    return (
        <div className={` ${isOpen ? 'right-0 w-full' : '-right-full w-full'} w-100 bg-white fixed top-0 h-full shadow-2xl sm:w-[100%]  md:w-[50%] xl:w-[30%]  transition-all  duration-300 z-20 px-4
            lg:px-[35px] overflow-scroll`} >
            <div className=' flex justify-between items-center py-6 border-b' >
                <div className=' font-semibold' >Shopping Bag({itemAmount})</div>
                <div className=' cursor-pointer' onClick={() => handleClosing()} ><IoMdArrowForward className='text-2xl' ></IoMdArrowForward></div>
            </div>

            <div className='flex flex-col  gap-y-2 h-[520px] lg:h-[640px] overflow-y-scroll overflow-x-hidden border-b' >{cart.map((cart, i) => <CartItem key={i} cart={cart} ></CartItem>)}</div>

            {cart.length > 0 ?
                <>
                    <div className=' flex justify-between items-center'>
                        <div className=' uppercase font-semibold ' >
                            <span>Total : $ {parseFloat(totalPrice).toFixed(2)}</span>
                        </div>
                        <div onClick={() => RemoveAllProducts()} className=' cursor-pointer text-red-500 py-4' >
                            <FiTrash></FiTrash>
                        </div>
                    </div>
                    <div className=' flex flex-col my-7' >
                        <Link className=' bg-gray-200 flex p-4 justify-center items-center w-full font-medium my-2' >View Cart</Link>
                        <Link className=' bg-black text-white flex p-4 justify-center items-center w-full font-medium'>Checkout</Link>
                    </div>


                </>
                : ""}


        </div>
    )
}

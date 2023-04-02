import React from 'react'
import { useContext } from 'react'
import { sidebarContext } from '../context/SidebarContext'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash } from 'react-icons/fi'
import CartItem from './CartItem'
import { cartContext } from '../context/CartContext'

export default function Sidebar() {
    let { isOpen, setIsOpen, handleClosing } = useContext(sidebarContext)
    let { cart, setCart } = useContext(cartContext)
    return (
        <div className={` ${isOpen ? 'right-0 w-full' : '-right-full w-full'} w-100 bg-white fixed top-0 h-full shadow-2xl sm:w-[100%]  md:w-[50%] xl:w-[50%]  transition-all  duration-300 z-20 px-4
            lg:px-[35px] overflow-scroll`} >
            <div className=' flex justify-between items-center py-6 border-b' >
                <div className=' font-semibold' >Shopping Bag(0)</div>
                <div className=' cursor-pointer' onClick={() => handleClosing()} ><IoMdArrowForward className='text-2xl' ></IoMdArrowForward></div>
            </div>

            <div>{cart.map((cart) => <CartItem key={cart.id} cart={cart} ></CartItem>)}</div>

        </div>
    )
}

import React, { useContext, useEffect, useState } from 'react'
import { sidebarContext } from '../context/SidebarContext'
import { BsBag } from 'react-icons/bs'
import { cartContext } from '../context/CartContext'

export default function Header() {
    let [activeHeader , setActiveHeader] = useState(false)
    let { setIsOpen, isOpen } = useContext(sidebarContext)
    let { itemAmount, setItemAmount } = useContext(cartContext)

    useEffect(()=>{
        window.addEventListener('scroll' ,()=>{
            window.scrollY > 60 ? setActiveHeader(true) : setActiveHeader(false)
        }) 
    },[])
    return (

        <header className={`${activeHeader ? ' bg-white shadow-md' : 'bg-none'} fixed transition-all w-full z-10`} >
            <div className='  w-full flex justify-between items-center  h-[50px] container mx-auto px-4 ' >
                <div>Header </div>
                <div className=' relative  flex  max-w-[50px]' onClick={() => setIsOpen(!isOpen)} >
                    <BsBag className=' text-2xl cursor-pointer ' ></BsBag>
                    <div className=' bg-red-500  absolute  -right-2 -bottom-2 rounded-full w-5 h-5 flex items-center justify-center text-white text-[12px]' >{itemAmount}</div>
                </div>
            </div>
        </header>
    )
}

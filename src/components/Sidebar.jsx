import React from 'react'
import { useContext } from 'react'
import { sidebarContext } from '../context/SidebarContext'
import {IoMdArrowForward} from  'react-icons/io'
import {FiTrash} from 'react-icons/fi'
import CartItem from './CartItem'

export default function Sidebar() {
    let {isOpen, setIsOpen, handleClosing}  = useContext(sidebarContext)
    console.log(isOpen);
  return (
    <div className={` ${ isOpen ? 'right-0' : '-right-full' } w-100 bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] xl:max-w-[30vw]   transition-all  duration-300 z-20 px-4
    lg:px-[35px]`} >
        <div className=' flex justify-between items-center py-6 border-b' >
            <div className=' font-semibold' >Shopping Bag(0)</div>
            <div className=' cursor-pointer'  onClick={ ()=> handleClosing()} ><IoMdArrowForward className='text-2xl' ></IoMdArrowForward></div>
        </div>
     
    </div>
  )
}

import React, { useContext } from 'react'
import { sidebarContext } from '../context/SidebarContext'
import { BsBag } from 'react-icons/bs'

export default function Header() {
   let {setIsOpen , isOpen} = useContext(sidebarContext)
  return (
    <div>Header
        <div onClick={()=> setIsOpen(!isOpen)} >
            <BsBag className=' text-2xl cursor-pointer' ></BsBag>
        </div>
    </div>
  )
}

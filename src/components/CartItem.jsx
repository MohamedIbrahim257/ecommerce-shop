import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

export default function CartItem({ cart }) {
    let { id, title, price, category, image, amount  } = cart
    let {removeProductsCart , increaseQty , decreaseQty} = useContext(cartContext)
    return (

        <div className='flex items-center gap-x-4 py-2 border-b  w-full border-gray-200 min-h-[150px] ' >

            <div className=' flex max-w-[80px]  min-h-[150px] gap-x-4 items-center' >
                <Link to={`/products${id}`} >
                    <img className='max-w-[80px]' src={image} alt="" />
                </Link>

            </div>
            <div className=' flex-col flex w-full ' >
                <div className='flex justify-between mb-2 w-full' >
                    <div className=' w-full px-3' >
                        <div>
                            <Link className=' w-full text-sm  uppercase font-medium max-w-[240px]  hover:underline  ' to={`/products${id}`} >{title}</Link>
                        </div>
                    </div>

                    <div>
                        <div onClick={()=> removeProductsCart(id)} ><IoMdClose  className=' text-gray-500  hover:text-red-500 transition  duration-300 cursor-pointer'></IoMdClose></div>
                    </div>
                </div>
                <div className='px-3 flex  gap-x-2 h-[36px]' >
                    <div className=' flex flex-1 max-w-[100px]  border items-center h-full font-medium' >
                        <div onClick={()=> decreaseQty(id)} className=' flex-1 flex justify-center items-center h-full cursor-pointer' >
                            <IoMdRemove></IoMdRemove>
                        </div>
                        <div className=' h-full flex justify-center items-center px-2 ' >{amount}</div>
                        <div onClick={()=> increaseQty(id)} className=' flex-1 flex justify-center items-center  h-full cursor-pointer' >
                            <IoMdAdd></IoMdAdd>
                        </div>
                    </div>
                    <div className=' flex-1 justify-around flex  items-center text-gray-500' >$ {price}</div>
                    <div className=' flex-1 justify-end flex  items-center' >$ {`${parseFloat(price * amount).toFixed(2)}`}</div>

                </div>

            </div>

        </div>



    )
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { cartContext } from '../context/CartContext'


export default function Products({ product }) {
    let { id, image, price, category, title } = product;
    let { addToCart } = useContext(cartContext)
    return (
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition' >
                <div className='flex justify-center items-center w-full h-full' >
                    {/* image */}
                    <div className='w-[200px] mx-auto  flex justify-center items-center' >
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title} />
                    </div>
                    {/* button */}
                    <div className=' absolute top-6 right-11  p-1 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-5' >
                        <button onClick={() => addToCart(product)} >
                            <div className=' shadow-lg flex justify-center items-center text-white w-12 h-12  bg-red-500 text-2xl' >
                                <BsPlus  ></BsPlus>
                            </div>
                        </button>
                        <div>
                            <Link className=' shadow-lg bg-white flex justify-center items-center p-3  w-12 h-12 my-1' ><BsEyeFill /></Link>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <div className='capitalize text-gray-500 text-sm' >{category}</div>
                <Link><h2>{title}</h2></Link>
                <div>${price}</div>
            </div>


        </div>


    )
}

import React from 'react'
import { useContext, useState } from 'react'
import Products from '../components/Products'
import { ProductContext } from '../context/ProductContext'

export default function Home() {
    let { allProducts } = useContext(ProductContext)

    const filterProducts = allProducts.filter((item) => {
        return (item.category === "men's clothing" || item.category === "women's clothing")
    })


    return (
        <section className=' py-16' >
            <div className='container mx-auto' >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-w-sm mx-auto md:max-none md:mx-0">
                {filterProducts.map((product) => <Products key={product.id} product={product} ></Products> )}
                </div>
          
            </div>
        </section>
    )
}

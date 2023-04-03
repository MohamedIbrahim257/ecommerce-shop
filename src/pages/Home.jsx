import React from 'react'
import { useContext, useState } from 'react'
import Products from '../components/Products'
import { ProductContext } from '../context/ProductContext'
import Hero from '../components/Hero'

export default function Home() {
    let { allProducts } = useContext(ProductContext)

    const filterProducts = allProducts.filter((item) => {
        return (item.category === "men's clothing" || item.category === "women's clothing")
    })


    return (
        <div>
            <Hero></Hero>
            <section className='py-16' >
                <div className='container mx-auto px-4 ' >
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] ">
                        {filterProducts.map((product) => <Products key={product.id} product={product} ></Products>)}
                    </div>

                </div>
            </section>
        </div>
    )
}

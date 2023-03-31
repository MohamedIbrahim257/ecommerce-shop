import React, { useEffect, useState , createContext } from 'react'
import axios from 'axios'
export  const ProductContext = createContext(0)

export default function ProductProvider({children}) {

    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async (callBack) => {

        let { data } = await axios.get("https://fakestoreapi.com/products")
        callBack(data)
        console.log(data);

    }

    useEffect(() => {
      getAllProducts(setAllProducts)

    }, [])

    return (
        <>
            <ProductContext.Provider value={{allProducts}} >
                {children}
            </ProductContext.Provider>
        </>
    )
}

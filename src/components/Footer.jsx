import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [date , setDate] = useState("")
 
    useEffect(()=>{
      const date = new Date()
      let year = date.getFullYear()
      setDate(year)
    },[])

  return (
    <footer className=' bg-gray-500 py-12 ' >
      <div className="container mx-auto text-white text-center">
        <p>Copyright &copy; Ecommerce Shop {date} . All right Reserved</p>
      </div>
    </footer>
  )
}

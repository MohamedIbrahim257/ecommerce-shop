import React, { useState } from 'react'
import { createContext } from 'react'

export const sidebarContext = createContext(0)

export default function SidebarProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleClosing = () => {
        setIsOpen(false)

    }
    return (
        <sidebarContext.Provider value={{ isOpen, setIsOpen, handleClosing }} >
            {children}
        </sidebarContext.Provider>
    )
}

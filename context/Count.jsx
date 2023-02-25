"use client"

import { createContext, useContext, useState } from "react"

const CountContext = createContext()


// create counter context

export default function CountProvider({ children }) {

    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}

// use counter context

export function useCount() {
    return useContext(CountContext)
}

// Compare this snippet from context\Count.jsx:

// Compare this snippet from Components\ThemeToggle.jsx:


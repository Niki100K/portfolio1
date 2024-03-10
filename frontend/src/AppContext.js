import React, { createContext } from 'react'
import { useInView } from 'react-intersection-observer'
export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [refNavBar, inViewNavBar] = useInView()

    return (
        <AppContext.Provider value={{ refNavBar, inViewNavBar }}>
            { children }
        </AppContext.Provider>
    )
}
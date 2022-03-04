import { createContext, useState } from "react"

export const Context = createContext("valor")

export const ProviderLogin = ({ children }) => {
    const [user, setUser] = useState({})
    const value = {
        user,
        toggle: () => setUser(value)
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
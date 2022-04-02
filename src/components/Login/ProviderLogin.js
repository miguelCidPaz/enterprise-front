import { createContext, useState } from "react"
import { users } from './mock';

export const UserContext = createContext(false)

export const ProviderLogin = ({ children }) => {
    const [session, setSession] = useState(false);
    const [id, setID] = useState(undefined)
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [founds, setFounds] = useState(undefined);

    const value = {
        session,
        id,
        name,
        email,
        founds,
        connectSession: async (sesion, iduser, userName, userEmail, founds) => {
            setSession(sesion)
            setID(iduser)
            setName(userName)
            setEmail(userEmail)
            setFounds(founds)
            return sesion
        }
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
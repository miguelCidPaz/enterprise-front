import axios from "axios";
import { createContext, useState } from "react"
import { users } from './mock';

export const UserContext = createContext(false)

export const ProviderLogin = ({ children }) => {
    const [session, setSession] = useState(false);
    const [id, setID] = useState(undefined)
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);

    const value = {
        session,
        id,
        name,
        email,
        connectSession: async (sesion, iduser, userName, userEmail) => {
            setSession(sesion)
            setID(iduser)
            setName(userName)
            setEmail(userEmail)

            return sesion
        }
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
import { createContext, useState } from "react"
import { users } from './mock';

export const UserContext = createContext(false)

const comprobateUser = (userName, userPass) => {
    const result = Object.values(users).filter(e => e.userName === userName && e.userPass === userPass)
    return !result.length < 1 ? [true, result[0].id, result[0].userName, result[0].userMail]
        : [false, undefined, undefined]
}

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
        connectSession: (userName, userPassword) => {
            let sesion = comprobateUser(userName, userPassword);
            setSession(sesion[0])
            setID(sesion[1])
            setName(sesion[2])
            setEmail(sesion[3])

            return sesion[0]
        }
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
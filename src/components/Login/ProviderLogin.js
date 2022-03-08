import { createContext, useState } from "react"
import { users } from './mock';

export const UserContext = createContext(false)

const comprobateUser = (userName, userPass) => {
    const result = Object.values(users).filter(e => e.userName === userName && e.userPass === userPass)
    return !result.length < 1 ? [true, result[0].userName, result[0].userMail]
        : [false, undefined, undefined]
}

export const ProviderLogin = ({ children }) => {
    const [session, setSession] = useState(false);
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);

    const value = {
        session,
        name,
        email,
        connectSession: (userName, userPassword) => {
            console.log(userName + " " + userPassword)
            let sesion = comprobateUser(userName, userPassword);
            setSession(sesion[0])
            setName(sesion[1])
            setEmail(sesion[2])

            return sesion[0]
        }
    }

    console.log(value)

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

import React, { createContext, useState } from 'react';
import FormLogin from './internal-components/FormLogin'
import FormRegister from './internal-components/FormRegister'

import './styles.scss';

// login or new user discriminator
export const LoginContext = createContext(true);  

/**
 * Component login
 * @params theme
 * @returns component react
 */
export default function Login(props) {
    const [login, setLogin] = useState(true);

    return (<div className='div--login'>
        <LoginContext.Provider value={{login, setLogin}}>
            {login ? <FormLogin theme={props.theme} /> : <FormRegister theme={props.theme} />}
        </LoginContext.Provider>
    </div>
    );
}
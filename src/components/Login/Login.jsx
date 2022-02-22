
import React from 'react';
import FormUser from './internal-components/FormUser'
import FormRegister from './internal-components/FormRegister'

import './styles.scss';

/**
 * Component login
 * @params theme
 * @returns component react
 */
 export default function FormUser(props) {
    let login = true;

    return (
        {login ? <FormUser theme={props.theme}> : <FormRegister theme={props.theme}>}
    );
}
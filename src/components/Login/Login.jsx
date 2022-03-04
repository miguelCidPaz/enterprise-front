
import FormLogin from './internal-components/FormLogin'
import FormRegister from './internal-components/FormRegister'
import { useState } from 'react';
import './styles.scss';

/**
 * Component login
 * @params theme
 * @returns component react
 */
export default function Login(props) {
    const [view, setView] = useState(false)

    return (<div className='div--login'>
        {view ? <FormLogin theme={props.theme} setView={setView} />
            : <FormRegister theme={props.theme} setView={setView} />}
    </div>
    );
}
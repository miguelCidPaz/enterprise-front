import { useState, useEffect, useContext } from 'react';
import './styles.scss';
import { UserContext } from '../Login/ProviderLogin';
const Filter = (props) => {
    const [filter, setFilter] = useState({
        values: false, employeds: true, events: false, times: false
    });

    const [show, setShow] = useState(false);
    const { session, connectSession } = useContext(UserContext);
    const changeFilter = (value) => {
        const copy = { values: false, employeds: false, events: false, times: false };
        if (value !== undefined) {
            copy[value] = true;
        }
        setFilter(copy);
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        if (loggedUserJSON) {
            const loggedUser= JSON.parse(loggedUserJSON);
            connectSession(true, loggedUser.id,loggedUser.username,loggedUser.email);
        }
    }, [filter]);
     
   /*  ¿¿¿¿esto no sería mejor ordenar en lugar de filtrar?????, por que para filtrar además necesitariamos unos parametros */

  /*  se podría quitar la opción eventos más proximos y colocar un botón abajo que al clickar los ordenara por el parametro elegido */

    const options = [
        { option: 'Por valor de empresa', value: 'values' },
        { option: 'Numero de empleados', value: 'employeds' },
        { option: 'Eventos mas proximos', value: 'events' }, /* esto no lo entiendo, ¿qué quiere decir eventos más próximos??? */
        { option: 'Antiguedad en la web', value: 'times' },
    ]

    return (
        <section className={show ? `filter--main-show ${props.theme}` : `filter--main ${props.theme}`}>

            <button onClick={e => setShow(!show)} className={`filter--button-show`}>
                <p className={`filter--button-show-label`}>Filter</p>
            </button>

            <div className={`filter--container`}>

                {options.map((element, index) => {
                    return (
                        <div key={index} className={`filter--container-button`}>
                            <button onClick={e => changeFilter(element.value)} className={`${filter[element.value] ? 
                            'filter--enable' : 'filter--disable'} filter--button ${props.theme}`}>
                                <div className={`${filter[element.value] ? 'filter--pilot-enable' : 
                                'filter--pilot-disable'}`}></div>
                            </button>
                            <p className={`filter--label-button ${props.theme}`}>{element.option}</p>
                        </div> /* ¿añadimos aquí un botón para filtrar???? */
                    )
                })}

            </div>

        </section>
    )
}

export default Filter;
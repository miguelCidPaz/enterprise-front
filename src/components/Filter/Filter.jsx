import { useState, useEffect } from 'react';
import './styles.scss';

const Filter = (props) => {
    const [filter, setFilter] = useState({
        values: false, employeds: true, events: false, times: false
    });

    const [show, setShow] = useState(false);

    const changeFilter = (value) => {
        const copy = { values: false, employeds: false, events: false, times: false };
        if (value !== undefined) {
            copy[value] = true;
        }
        setFilter(copy);
    }

    useEffect(() => {
    }, [filter]);


    const options = [
        { option: 'Por valor de empresa', value: 'values' },
        { option: 'Numero de empleados', value: 'employeds' },
        { option: 'Eventos mas proximos', value: 'events' },
        { option: 'Antiguedad en la web', value: 'times' },
    ]

    return (
        <section className={`filter--main ${props.theme}`} className={show ? `filter--main-show ${props.theme}` : `filter--main ${props.theme}`}>

            <button onClick={e => setShow(!show)} className={`filter--button-show`}>
                <p className={`filter--button-show-label`}>Filter</p>
            </button>

            <div className={`filter--container`}>

                {options.map(element => {
                    return (
                        <div className={`filter--container-button`}>
                            <button onClick={e => changeFilter(element.value)} className={`${filter[element.value] ? 'filter--enable' : 'filter--disable'} filter--button ${props.theme}`}>
                                <div className={`${filter[element.value] ? 'filter--pilot-enable' : 'filter--pilot-disable'}`}></div>
                            </button>
                            <p className={`filter--label-button ${props.theme}`}>{element.option}</p>
                        </div>
                    )
                })}

            </div>

        </section>
    )
}

export default Filter;
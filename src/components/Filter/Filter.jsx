import { useState, useEffect, useContext } from 'react';
import './styles.scss';
import { UserContext } from '../Login/ProviderLogin';
import { OrderContext} from '../Ranking/Ranking';
const Filter = (props) => {
    const [filter, setFilter] = useState({
        /* values: false, employeds: true, events: false, times: false */ 
        //here we can initialize the state with some value or leave it empty
    });

    const [show, setShow] = useState(false);
    const { session, connectSession } = useContext(UserContext);
    const { orderby, setOrderby } = useContext(OrderContext);
    
    //function to update order
    const changeFilter = (value) => {
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        if (loggedUserJSON) {
            window.localStorage.setItem('order',JSON.stringify(value));
        }
        const copy = { values: false, employeds: false, events: false, times: false };
        if (value !== undefined) {
            copy[value] = true;
        }
        setFilter(copy);
    }

    const handleTrigger = ()=> {
        const ordertrigger  = window.localStorage.getItem('order');
        const ordertriggerJson = JSON.parse(ordertrigger);
        setOrderby(ordertriggerJson);//upaating context
        setShow(!show); //closing modal
    }

    useEffect(() => {
        const savedorderStorage = window.localStorage.getItem('order');
        if (savedorderStorage) {
            const orderby= JSON.parse(savedorderStorage);
            changeFilter(orderby);
        }
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        if (loggedUserJSON) {
            const loggedUser= JSON.parse(loggedUserJSON);
            connectSession(true, loggedUser.id,loggedUser.username,loggedUser.email);
        }
    }, []);
     
 
    const options = [
        { option: 'Por valor de empresa', value: 'values' },
        { option: 'Numero de empleados', value: 'employeds' },
        { option: 'Antiguedad en la web', value: 'times' }
    ]

    return (
        <section className={show ? `filter--main-show ${props.theme}` : `filter--main ${props.theme}`}>

            <button onClick={e => setShow(!show)} className={`filter--button-show`}>
                <p className={`filter--button-show-label`}>Ordenar por</p>
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
                        </div> 
                    )
                })}
                <button onClick={handleTrigger} className={`filter--button-trigger ${props.theme}`}>Ordernar</button>
            </div>

        </section>
    )
}

export default Filter;
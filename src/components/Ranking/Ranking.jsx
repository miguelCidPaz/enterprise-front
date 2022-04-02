import Filter from "../Filter/Filter"
import TableItems from "../TableItems/TableItems"
import './styles.scss'
import {createContext, useState, useEffect} from 'react';
export const OrderContext = createContext("");

/**
 * This is a container to display the navigation content
 * @param {*} props
 * @param {String} theme dark and light theme
 * @returns 
 */
const Ranking = (props) => {
    const [orderby, setOrderby] =useState("");
    const order = window.localStorage.getItem('order');
    useEffect(() => {
        if (order) {
            setOrderby(JSON.parse(order));
        }
    },[orderby]);

    return (
        <OrderContext.Provider value={{orderby, setOrderby}}>
        <section className={`ranking--main ${props.theme}`}>
            <Filter theme={props.theme} />
            <TableItems theme={props.theme} />
        </section>
        </OrderContext.Provider>
    )
}

export default Ranking
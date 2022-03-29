import ItemCard from '../ItemCard/ItemCard';
import Company from '../CustomTools/Company';
import './styles.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { generateNumPags, generatePags } from './LogicTableItems';
import DetailCard from '../DetailCard/DetailCard';
import { OrderContext } from '../Ranking/Ranking';
/* export const forceRendering = (orderpassed) =>setCompaniesOrder(orderpassed); */



/**
 * This is a container to display companies
 * @param {*} props 
 * @param {String} theme dark and light theme
 * @returns 
 */
const TableItems = (props) => {
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState([]);
    /* const [companiesOrder, setCompaniesOrder] = useState(""); */
    const [detail, setDetail] = useState(undefined);
    const [numsPag, setNumPags] = useState(generateNumPags());
    const [halfNumbers, setHalfNumbers] = useState([]);
    const orderprovided = useContext(OrderContext);

    
    useEffect(() => {
        if (items !== undefined && items !== null) {
            setHalfNumbers(generatePags(index, items.length))
        }
    }, [items, index]);

    /* window.onstorage = (event) => {
        console.log('antes del if del onstorage');
        if (event.key === "order") {
            console.log('dentro del onstorage')
            const isOrder = window.localStorage.getItem('order');
            if (isOrder) {
                const orderValue= JSON.parse(isOrder);
                setCompaniesOrder(orderValue);
            }        
        }
    } */

    useEffect(() => {
        setNumPags(generateNumPags(items))
        uploadItems();
    }, [orderprovided])

    const uploadItems = async () => {
        const result = []; //Result donde cargamos los recortes para crear el arr bidi

        await axios({
            method: 'get',
            url: 'http://localhost:3000/v1/companies/',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            if (res.status === 200) {
                const savedorderStorage = window.localStorage.getItem('order');
                if (savedorderStorage) {
                    const orderby= JSON.parse(savedorderStorage);
                    orderby === 'values'? res.data.sort((a,b)=> a.company_value > b.company_value ? -1 : 1):
                    orderby === 'employeds'? res.data.sort((a,b)=> a.num_employees > b.num_employees ? -1 : 1) : 
                    res.data.sort((a,b)=> a.time_modification > b.time_modification ? -1 : 1);
                }
                while (res.data.length > 0) {
                    result.push(res.data.splice(0, 6));
                }
                if (result.length > 0) {
                    setItems(result)
                    window.localStorage.setItem('globalItems',JSON.stringify(result))
                    
                }
            }
        })
    }

    return (

        <section className="tableitems--main">
            {detail !== undefined ? <DetailCard item={detail} setDetail={setDetail} groupItems={items} page='rankingPage'/>
                : <><div className="tableitems--interior-body">
                    {items[index] !== undefined && items[index] !== null ?
                        items[index].map((e, i) => {
                            return (
                                <ItemCard
                                    key={i}
                                    setDetail={setDetail}
                                    item={e}
                                    theme={props.theme}
                                    index={i} />
                            );
                        }) : null}
                </div><div className="tableitems--pagination">
                        <div className={`tableitems--animation-toleft tableitems--pagination-container ${props.theme}`}>
                            <p onClick={e => { index > 0 ? setIndex(index - 1) : setIndex(items.length - 1); }} className={`tableitems--pagination-control ${props.theme}`}>{"<"}</p>
                        </div>
                        {halfNumbers !== undefined && halfNumbers !== null ?
                            halfNumbers.map((e, i) => {
                                return (e >= 0 ?
                                    <div key={i} className={halfNumbers > i
                                        ? `tableitems--animation-toleft tableitems--pagination-container ${props.theme}`
                                        : `tableitems--animation-toright tableitems--pagination-container ${props.theme}`}>
                                        <p onClick={click => setIndex(e)} className={`${e === index ? 'tableitems--pag-selected ' : null} tableitems--pagination-control ${props.theme}`}>{e + 1}</p>
                                    </div>
                                    : null
                                );
                            }) : null}
                        <div className={`tableitems--animation-toright tableitems--pagination-container ${props.theme}`}>
                            <p onClick={e => index === items.length - 1 ? setIndex(0) : setIndex(index + 1)} className={`tableitems--pagination-control ${props.theme}`}>{">"}</p>
                        </div>
                    </div></>}

        </section>
    )
}

export default TableItems;
import ItemCard from '../ItemCard/ItemCard';
import Company from '../CustomTools/Company';
import './styles.scss';
import { useState, useEffect } from 'react';
import { uploadItems, generateNumPags, generatePags } from './LogicTableItems';
import DetailCard from '../DetailCard/DetailCard';

/**
 * This is a container to display companies
 * @param {*} props 
 * @param {String} theme dark and light theme
 * @returns 
 */
const TableItems = (props) => {
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState([]);
    const [detail, setDetail] = useState(undefined);
    const [numsPag, setNumPags] = useState(generateNumPags());
    const [halfNumbers, setHalfNumbers] = useState([]);

    useEffect(() => {
        if (items !== undefined && items !== null) {
            setHalfNumbers(generatePags(index, items.length))
        }
    }, [items, index]);

    useEffect(() => {
        setNumPags(generateNumPags(items))
        setItems(uploadItems());
    }, [])

    //const halfNumbers = items.length / 2;;
    return (

        <section className="tableitems--main">
            {detail !== undefined ? <DetailCard item={detail} setDetail={setDetail} />
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
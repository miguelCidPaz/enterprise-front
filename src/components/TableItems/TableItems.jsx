import ItemCard from '../ItemCard/ItemCard';
import './styles.scss';

/**
 * This is a container to display companies
 * @param {*} props 
 * @param {String} theme dark and light theme
 * @returns 
 */
const TableItems = (props) => {

    const numbers = [1, 2, 3, 4, 5, 6]
    const halfNumbers = Math.round(numbers.length / 2);

    return (
        <section className="tableitems--main">
            <div className="tableitems--interior-body">
                {numbers.map((e, i) => {
                    return (
                        <ItemCard key={i} theme={props.theme} index={i} />
                    )
                })}
            </div>
            <div className="tableitems--pagination">
                <div className={`tableitems--animation-toleft tableitems--pagination-container ${props.theme}`}>
                    <p className={`tableitems--pagination-control ${props.theme}`}>{"<"}</p>
                </div>
                {numbers.map((e, i) => {
                    return (i < 6 ?
                        <div key={i} className={halfNumbers > i
                            ? `tableitems--animation-toleft tableitems--pagination-container ${props.theme}`
                            : `tableitems--animation-toright tableitems--pagination-container ${props.theme}`}>
                            <p className={`tableitems--pagination-control ${props.theme}`}>{e}</p>
                        </div>
                        : null
                    )
                })}
                {numbers.length > 6 ?
                    <div className={`tableitems--animation-toright tableitems--pagination-container ${props.theme}`}>
                        <p className={`tableitems--pagination-control ${props.theme}`}>...</p>
                    </div>
                    : null}
                <div className={`tableitems--animation-toright tableitems--pagination-container ${props.theme}`}>
                    <p className={`tableitems--pagination-control ${props.theme}`}>{">"}</p>
                </div>
            </div>
        </section>
    )
}

export default TableItems;
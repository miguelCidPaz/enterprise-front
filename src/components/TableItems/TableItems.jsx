import ItemCard from '../ItemCard/ItemCard';
import './styles.scss';

const TableItems = (props) => {

    const numbers = [1, 2, 3, 4, 5, 6]
    return (
        <section className="tableitems--main">
            <div className="tableitems--interior-body">
                {numbers.map(e => {
                    return (
                        <ItemCard theme={props.theme} />
                    )
                })}
            </div>
            <div className="tableitems--pagination">
                {numbers.map(e => {
                    return (
                        <div className="tableitems--pagination-container">
                            <p>{e}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TableItems;
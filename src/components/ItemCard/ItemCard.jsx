import './styles.scss';

/**
 * This item is to summarize the data of a company
 * @param {*} props
 * @param {String} theme dark and light theme
 * @param {number} index for the class and the animations
 * @returns 
 */
const ItemCard = (props) => {
    const item = props.item

    return (
        <div className={`itemcard--main ${props.theme} itemcard--item-${props.index + 1}`}>
            <div className={`itemcard--body-container ${props.theme}`}>
                <div className={`itemcard--body-left ${props.theme}`}>
                    <p className={`itemcard--item-name ${props.theme}`}>{item.name_description}</p>
                    <p className={`itemcard--item-site ${props.theme}`}>{item.social_media}</p>
                    <p className={`itemcard--item-employeds ${props.theme}`}>Numero de empleados: {item.num_employees}</p>
                    <p className={`itemcard--item-employeds ${props.theme}`}>{item.sector}</p>
                </div>
                <div className={`itemcard--body-right ${props.theme}`}>
                    <img src={item.logo} alt="Brand" />
                </div>
            </div>
            <div className={`itemcard--body-button ${props.theme}`}>
                <button className={`itemcard--button ${props.theme}`}>Details</button>
            </div>
        </div>
    )
}

export default ItemCard
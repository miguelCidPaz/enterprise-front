import './styles.scss';

/**
 * This item is to summarize the data of a company
 * @param {*} props
 * @param {String} theme dark and light theme
 * @param {number} index for the class and the animations
 * @returns 
 */
const ItemCard = (props) => {

    return (
        <div className={`itemcard--main ${props.theme} itemcard--item-${props.index + 1}`}>
            <div className={`itemcard--body-container ${props.theme}`}>
                <div className={`itemcard--body-left ${props.theme}`}>
                    <p className={`itemcard--item-name ${props.theme}`}>Soy un nombre medio largo{props.index + 1}</p>
                    <p className={`itemcard--item-site ${props.theme}`}>https://www.ascodevida-enterprise.com/</p>
                    <p className={`itemcard--item-employeds ${props.theme}`}>Numero de empleados: 259</p>
                </div>
                <div className={`itemcard--body-right ${props.theme}`}>
                    <img src="https://www.raccoongames.es/med/img/productos/2017/08/15/tp%20POP_17.jpg" alt="Brand" />
                </div>
            </div>
            <div className={`itemcard--body-button ${props.theme}`}>
                <button className={`itemcard--button ${props.theme}`}>Details</button>
            </div>
        </div>
    )
}

export default ItemCard
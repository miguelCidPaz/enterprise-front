import './styles.scss';

const ItemCard = (props) => {

    return (
        <div className={`itemcard--main ${props.theme}`}>
            <div className={`itemcard--body-container ${props.theme}`}>
                <div className={`itemcard--body-left ${props.theme}`}>
                    <p className={`itemcard--item-name ${props.theme}`}>Soy un nombre medio largo</p>
                    <p className={`itemcard--item-site ${props.theme}`}>https://www.ascodevida-enterprise.com/</p>
                    <p className={`itemcard--item-employeds ${props.theme}`}>259</p>
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
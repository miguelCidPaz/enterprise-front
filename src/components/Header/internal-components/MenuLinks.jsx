import { Link } from 'react-router-dom';

/**
 * This is a container for the navigation menu
 * @param {*} props
 * @param {String} theme dark and light mode 
 * @returns 
 */
const MenuLinks = (props) => {

    return (
        <nav className="bodyheader--menu-main">
            <div className="bodyheader--menu-container">
                <Link to={'/Login'} className="bodyheader--menu-link link-1">Registro</Link>
                <Link to={'/Ranking'} className="bodyheader--menu-link link-2">Ranking</Link>
                <button id="switch-ligths"
                    className="bodyheader--menu-link link-3"
                    onClick={e => props.turnLight(props.theme)}>
                    <div className="light-up"></div>
                </button>
            </div>
            <div className='bodyheader--frame-menu-mobile'>
                <div className='bodyheader--menu-mobile'></div>
            </div>
        </nav>
    )
}

export default MenuLinks
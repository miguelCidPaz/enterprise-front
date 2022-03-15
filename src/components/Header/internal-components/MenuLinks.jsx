import { Link } from 'react-router-dom';
import { useContext , useState } from 'react';
import { UserContext } from '../../Login/ProviderLogin';

/**
 * This is a container for the navigation menu
 * @param {*} props
 * @param {String} theme dark and light mode 
 * @returns 
 */
const MenuLinks = (props) => {
    const { session } = useContext(UserContext)
    const [active, setActive] = useState(false);
    const handleTheme = ()=> {
        props.turnLight(props.theme);
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        if (loggedUserJSON) {
            const themeStoraged = props.theme === 'dark'? 'light' : 'dark';
            window.localStorage.setItem('theme',JSON.stringify(themeStoraged));
        }
    }
    return (
        <nav className="bodyheader--menu-main">
            <div className="bodyheader--menu-container">

                {session ?
                    <Link to={'/Profile'} className="bodyheader--menu-link link-1">Perfil</Link>
                    : <Link to={'/Login'} className="bodyheader--menu-link link-1">Registro</Link>}

                <Link to={'/Ranking'} className="bodyheader--menu-link link-2">Ranking</Link>
                <button id="switch-ligths"
                    className="bodyheader--menu-link link-3"
                    onClick={handleTheme/*e =>  props.turnLight(props.theme) */}>
                    <div className="light-up"></div>
                </button>
            </div>
            <div className='bodyheader--frame-menu-mobile'>
                <div className='bodyheader--menu-mobile' onClick={e => setActive(!active)}>{active? <h1>Hola</h1>:null}{/* este es el div del menu  hambuger */}</div>
            </div>
        </nav>
    )
}

export default MenuLinks
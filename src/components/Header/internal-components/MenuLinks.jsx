import { Link } from 'react-router-dom';
import { useContext , useState , useEffect } from 'react';
import { UserContext } from '../../Login/ProviderLogin';

/**
 * This is a container for the navigation menu
 * @param {*} props
 * @param {String} theme dark and light mode 
 * @returns 
 */
const MenuLinks = (props) => {
    const { session, id, name, email, connectSession } = useContext(UserContext);
    const [active, setActive] = useState(false);
    const handleTheme = ()=> {
        props.turnLight(props.theme);
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        if (loggedUserJSON) {
            const themeStoraged = props.theme === 'dark'? 'light' : 'dark';
            window.localStorage.setItem('theme',JSON.stringify(themeStoraged));
        }
    }
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        if (loggedUserJSON) {
            const loggedUser= JSON.parse(loggedUserJSON);
            connectSession(true, loggedUser.id,loggedUser.username,loggedUser.email);
            setActive(true);
        }
    },[])
    return (
        <nav className="bodyheader--menu-main">
            <div className="bodyheader--menu-container">

                {session ?
                    <Link to={'/Profile'} className="bodyheader--menu-link link-1">Perfil</Link>
                    : <Link to={'/Login'} className="bodyheader--menu-link link-1">Registro</Link>}

                <Link to={'/Ranking'} className="bodyheader--menu-link link-2">Ranking</Link>
                {/* <button id="switch-ligths"
                    className="bodyheader--menu-link link-3"
                    onClick={handleTheme}>
                    <div className="light-up"></div>
                </button> */}
            </div>
            <div className='bodyheader--frame-menu-mobile'>
                <div className='bodyheader--menu-mobile' onClick={e => setActive(!active)}>{/* este es el div del menu  hambuger */}</div>
                {active? <div className='bodyheader--menu-mobile-options'>                
                    {session ?
                        <Link onClick={e => setActive(!active)} to={'/Profile'} className="bodyheader--menu-mobile-link link-1">Perfil</Link>
                        : <Link onClick={e => setActive(!active)} to={'/Login'} className="bodyheader--menu-mobile-link link-1">Registro</Link>}

                    <Link onClick={e => setActive(!active)} to={'/Ranking'} className="bodyheader--menu-mobile-link link-2">Ranking</Link>

                </div>:null}                    
            </div>
                <button id="switch-ligths"
                    className="bodyheader--menu-mobile-link link-3"
                    onClick={handleTheme/*e =>  props.turnLight(props.theme) */}>
                    <div className="light-up"></div>
                </button>
        </nav>
    )
}

export default MenuLinks
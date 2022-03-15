import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Login/ProviderLogin';
import Company from '../CustomTools/Company';
import ItemCard from '../ItemCard/ItemCard';
import './styles.scss';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const [viewItems, setViewItems] = useState(false);
    const [items, setItems] = useState(undefined);
    const { session, id, name, email, connectSession } = useContext(UserContext);
   /*  este contexto guarda además  de los datos del usuario un boolean para ver si está conectado y una función para setear ese estado */
    useEffect(() => {
        recoverCompanies();
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        if (loggedUserJSON) {
            const loggedUser= JSON.parse(loggedUserJSON);
            connectSession(true, loggedUser.id,loggedUser.username,loggedUser.email);
        }
    }, [])

    useEffect(() => {

    }, [items])

    const recoverCompanies = async () => {
        await axios({
            method: 'get',
            url: `http://localhost:3000/v1/companies/${id}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status === 200) {
                setItems(res.data)
            }
        })
    }

    const handleLogout = () => {
        connectSession(false, undefined, undefined); 
        window.localStorage.removeItem('userlogged');
        window.localStorage.removeItem('theme')
    }

    return (
        <section className='profile--main'>
            {viewItems ? <div className='profile--main-enterprises'> {/* esto se renderiza al clickar en ver tus empresas */}
                <div className="profile--main-center">
                    <NavLink to={`/FormEnterprise/${id}`} className='profile--button-create-company'>+{/*  botòn de crear nueva empresa */}
                        <div className='profile--modal-help'><p>Crear nueva empresa</p></div>
                    </NavLink>
                    <button className='profile--button-left profile--button-center' onClick={e => setViewItems(!viewItems)}>
                        Volver a perfil </button>
                    {items !== undefined && items !== null ? items.map((e, i) => { /* si la petición ha devuelto empresas las renderizamos */
                        return <ItemCard item={e} key={i} index={i} /> 
                        /* aqui tendríamos que crear un pop-up de detalles nuevo, el del ranking no vale porque tiene comprar y comparar*/
                    }) : null}
                </div> {/* a partir de aquí renderiza al hacer login */}
            </div> : <div className={viewItems ? 'profile--main-container profile--main-container-toright' : 'profile--main-container'}>
                <div className='profile--slot'>
                    <p className='profile--label'>Your Name: </p>
                    <p className='profile--text'>{session ? name : undefined}</p>
                </div>
                <div className='profile--slot'>
                    <p className='profile--label'>Your Email: </p>
                    <p className='profile--text'>{session ? email : undefined}</p>
                </div>


                <p className='profile--text profile--title'>Acciones</p>

                <button className='profile--button-left' onClick={e => setViewItems(!viewItems)}>Ver tus empresas</button>
                <Link to={"/"} onClick={handleLogout} className='profile--button'>Log Out</Link>
            </div>}

        </section>
    )
}

export default Profile;
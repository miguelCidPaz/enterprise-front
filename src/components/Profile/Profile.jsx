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

    useEffect(() => {
        recoverCompanies();
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

    return (
        <section className='profile--main'>
            {viewItems ? <div className='profile--main-enterprises'>
                <div className="profile--main-center">
                    <NavLink to={`/FormEnterprise/${id}`} className='profile--button-create-company'>+
                        <div className='profile--modal-help'><p>Crear nueva empresa</p></div>
                    </NavLink>
                    <button className='profile--button-left profile--button-center' onClick={e => setViewItems(!viewItems)}>Volver a perfil </button>
                    {items !== undefined && items !== null ? items.map((e, i) => {
                        return <ItemCard item={e} key={i} index={i} />
                    }) : null}
                </div>
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
                <Link to={"/"} onClick={e => connectSession(false, undefined, undefined)} className='profile--button'>Log Out</Link>
            </div>}

        </section>
    )
}

export default Profile;
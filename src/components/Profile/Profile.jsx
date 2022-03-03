import { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './styles.scss';

const Profile = () => {
    const [viewItems, setViewItems] = useState(false);

    const arr = [1, 2, 3, 4, 5]
    return (
        <section className='profile--main'>
            {viewItems ? <div className='profile--main-enterprises'>
                <div className="profile--main-center">
                    {arr.map((e, i) => {
                        return <ItemCard key={i} index={i} />
                    })}
                    <button className='profile--button-left profile--button-center' onClick={e => setViewItems(!viewItems)}>Volver a perfil</button>
                </div>
            </div> : <div className={viewItems ? 'profile--main-container profile--main-container-toright' : 'profile--main-container'}>
                <div className='profile--slot'>
                    <p className='profile--label'>Your Name: </p>
                    <p className='profile--text'>MyName</p>
                </div>
                <div className='profile--slot'>
                    <p className='profile--label'>Your Email: </p>
                    <p className='profile--text'>MyEmail</p>
                </div>


                <p className='profile--text profile--title'>Acciones</p>

                <button className='profile--button-left' onClick={e => setViewItems(!viewItems)}>Ver tus empresas</button>
                <button className='profile--button'>Log Out</button>
            </div>}

        </section>
    )
}

export default Profile;
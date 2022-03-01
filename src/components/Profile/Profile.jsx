import './styles.scss';

const Profile = () => {

    return (
        <section className='profile--main'>
            <div className='profile--main-container'>
                <div className='profile--slot'>
                    <p className='profile--label'>Your Name: </p>
                    <p className='profile--text'>MyName</p>
                </div>
                <div className='profile--slot'>
                    <p className='profile--label'>Your Email: </p>
                    <p className='profile--text'>MyEmail</p>
                </div>


                <p className='profile--text profile--title'>Acciones</p>

                <button className='profile--button-left'>Ver tus empresas</button>
                <button className='profile--button'>Log Out</button>
            </div>
        </section>
    )
}

export default Profile;
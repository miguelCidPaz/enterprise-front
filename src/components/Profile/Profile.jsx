import './styles.scss';

const Profile = () => {

    return (
        <section className='perfil--main'>
            <div className='perfil--main-container'>
                <div className='perfil--slot'>
                    <p className='perfil--label'>Your Name: </p>
                    <p className='perfil--text'>MyName</p>
                </div>
                <div className='perfil--slot'>
                    <p className='perfil--label'>Your Email: </p>
                    <p className='perfil--text'>MyEmail</p>
                </div>


                <p className='perfil--text perfil--title'>Acciones</p>

                <button className='perfil--button-left'>Ver tus empresas</button>
                <button className='perfil--button'>Log Out</button>
            </div>
        </section>
    )
}

export default Profile;
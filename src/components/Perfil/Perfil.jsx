import './styles.scss';

const Perfil = () => {

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

                <button className='perfil--button'>Crear una Empresa</button>
                <button className='perfil--button-left'>Ver tus Empresa</button>
                <button className='perfil--button'>Borrar Empresa</button>
            </div>
        </section>
    )
}

export default Perfil;
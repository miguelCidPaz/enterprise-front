import './styles.scss';

const Filter = (props) => {

    return (
        <section className={`filter--main`}>

            <button className={`filter--button-show`}>
                <p className={`filter--button-show-label`}>Filter</p>
            </button>

            <div className={`filter--container`}>

                <div className={`filter--container-button`}>
                    <button className={`filter--button-deactivate ${props.theme}`}>on</button>
                    <button>Asc</button>
                    <p>Por valor</p>
                </div>

                <div className={`filter--container-button`}>
                    <button className={`filter--button-deactivate ${props.theme}`}>on</button>
                    <button>Asc</button>
                    <p>Numero de empleados</p>
                </div>

                <div className={`filter--container-button`}>
                    <button className={`filter--button-deactivate ${props.theme}`}>on</button>
                    <button>Asc</button>
                    <p>Eventos mas proximos</p>
                </div>

                <div className={`filter--container-button`}>
                    <button className={`filter--button-deactivate ${props.theme}`}>on</button>
                    <button>Asc</button>
                    <p>Antiguedad en la web</p>
                </div>

            </div>

        </section>
    )
}

export default Filter;
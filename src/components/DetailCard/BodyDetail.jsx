import { useState , useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from '../Login/ProviderLogin';

const BodyDetail = (props) => {
    const { session } = useContext(UserContext);
    const [viewDelete, setViewDelete] = useState(props.propierty || false);
    let loggedUser;
    if (session) {
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        loggedUser= JSON.parse(loggedUserJSON);
    }
 
    const img = "https://www.latercera.com/resizer/l1xaFoeiNS1H3kT-Ta9N4MnLQRQ=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/AGFA2V47ABFT7DM243GRZRLPVQ.jpg"
    return (
        <div className="details--body-main">
            {viewDelete ? <button>Borrar</button> : null}
            <div className="details--header">
                <p className="details--title">{props.item.name_description}</p>
                <div className="details--frame">
                    <img className="details--photo" src={props.item.logo} alt="#" />
                </div>
            </div>
            <div className="details--body">
                <p className="details--text">{props.item.company_description}</p>
                <p className="details--text">{props.item.sector}</p>
                <p className="details--text">NumEmpleados: {props.item.num_employees}</p>
                <p className="details--text">Precio: {props.item.company_value}</p>
            </div>
            <div className="details--container-buttons">
                <a target="_blank" href={props.item.social_media} className="details--link">+info</a>
                {!loggedUser? <NavLink to={`/Purchase/${props.item.idcompany}`} className="details--button details--button-link">Comprar</NavLink> : loggedUser.id !== props.item.iduser ? <NavLink to={`/Purchase/${props.item.idcompany}`} className="details--button details--button-link">Comprar</NavLink> : null}
               
                {props.viewSecondary
                    ? <button onClick={e => props.selectNewPrincipalItem(props.item)} className="details--button">Escoger este</button>
                    : <button onClick={e => props.setViewSelect(!props.viewSelect)} className="details--button">Comparar</button>}

            </div>
        </div>
    )
}

export default BodyDetail
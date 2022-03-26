import { useState , useContext, createContext } from "react"
import { NavLink, unstable_HistoryRouter } from "react-router-dom"
import { UserContext } from '../Login/ProviderLogin';


const BodyDetail = (props) => {
    const { session } = useContext(UserContext);
    const [viewDelete, setViewDelete] = useState(props.propierty || false);
    const [isProfile, setProfile] = useState(false)
   
    console.log(props)
    let loggedUser;
    if (session) {
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        loggedUser= JSON.parse(loggedUserJSON);
        console.log(loggedUser)
    }

    console.log(props.item)
    function StorageCompany(){
        //hay que ver aquí como almacenar correctamente la fecha. Más información en https://stackoverflow.com/questions/29629458/saving-and-retrieving-date-from-local-storage
        window.localStorage.setItem('companyToModify',JSON.stringify(props.item))
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
                {loggedUser.id !== props.item.iduser ? <NavLink to={`/Purchase/${props.item.idcompany}`} className="details--button details--button-link">Comprar</NavLink> 
                : <NavLink onClick={StorageCompany} to={`/ModifyEnterprise/${props.item.idcompany}`} className="details--button details--button-link" >Modificar</NavLink>} 
                {props.viewSecondary
                    ? <button onClick={e => props.selectNewPrincipalItem(props.item)} className="details--button">Escoger este</button>
                    : <button onClick={e => props.setViewSelect(!props.viewSelect)} className="details--button">Comparar</button>}

            </div>
        </div>

    )
}

export default BodyDetail
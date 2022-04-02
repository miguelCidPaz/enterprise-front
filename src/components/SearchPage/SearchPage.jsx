import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect,useContext } from "react"
import axios from "axios"
import './style.scss';
import ItemCard from "../ItemCard/ItemCard";
import DetailCard from "../DetailCard/DetailCard";
import { UserContext } from '../Login/ProviderLogin';


const SearchPage = (props) => {
    const { session } = useContext(UserContext);
    let {enterpriseName} = useParams()
    const [enterprise,setEnterprise] = useState([])
    const [detail, setDetail] = useState(undefined);
    /* const [globalItems,setGlobalItems] = useState([]) */
    let loggedUser;
    useEffect(()=> {
        if (session) {
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        loggedUser= JSON.parse(loggedUserJSON);
        console.log(loggedUser)
    }
    },[])
    
    const page = 'searchPage'
    
    useEffect(()=> {
        recoverCompanies()
    },[])
    /* const updateitems = async (a) => {
        await setGlobalItems([...a])
    }
    let items;
    useEffect(async ()=> {
        const globalItemsJSON = window.localStorage.getItem('globalItems')
        items = JSON.parse(globalItemsJSON)
        await updateitems(items);
       /*  await recoverCompanies() 
    },[]) */

    const recoverCompanies = async () => {
        await axios({
            method: 'get',
            url: `http://localhost:3000/v1/companies/search/${enterpriseName}`,//esta peticion donde va????
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        }).then((res) => {
            if (res.status === 200) {
                setEnterprise(res.data)
            }
        })
    }

    
    return (<div className="results--main">{detail !== undefined ? <DetailCard item={detail} setDetail={setDetail} page={page} />
    : <div className="tableitems--interior-body-results">
        
           {enterprise.map((e, i) =>  <ItemCard
                        key={i}
                        setDetail={setDetail}
                        item={e}
                        theme={props.theme}
                        index={i} />)}
                
                 </div>}</div>)

}
export default SearchPage
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
    const [items,setItems] = useState([])
    let loggedUser;
    if (session) {
        const loggedUserJSON = window.localStorage.getItem('userlogged');
        loggedUser= JSON.parse(loggedUserJSON);
        console.log(loggedUser)
    }
    const page = 'searchPage'
    
    useEffect(()=> {
        uploadItems()
    },[])
    useEffect(()=> {
        
        recoverCompanies()
        
    },[])
    const uploadItems = async () => {
        const result = []; //Result donde cargamos los recortes para crear el arr bidi

        await axios({
            method: 'get',
            url: 'http://localhost:3000/v1/companies/',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            if (res.status === 200) {
                while (res.data.length > 0) {
                    result.push(res.data.splice(0, 6));
                }
                if (result.length > 0) {
                    setItems(result)
                    
                    
                }
            }
        })
    }

    const recoverCompanies = async () => {
        await axios({
            method: 'get',
            url: `http://localhost:3000/v1/companies/search/${enterpriseName}`,
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
     
    return   (<div className="results--main"> {detail !== undefined  ?  <DetailCard item={detail} setDetail={setDetail} groupItems={items} page={page}  />
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
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import './style.scss';
import ItemCard from "../ItemCard/ItemCard";
import DetailCard from "../DetailCard/DetailCard";

const SearchPage = (props) => {
    let {enterpriseName} = useParams()
    const [enterprise,setEnterprise] = useState([])
    const [detail, setDetail] = useState(undefined);

    useEffect(()=> {
       
        recoverCompanies()
        console.log(enterprise)
    },[])

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
    
    return (<div className="results--main">{detail !== undefined ? <DetailCard item={detail} setDetail={setDetail} groupItems={enterprise} />
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
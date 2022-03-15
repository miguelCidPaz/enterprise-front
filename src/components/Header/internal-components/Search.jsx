import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/**
 * This is the search box and it contains the icon and an input text
 * @param {*} props
 * @param {String} theme dark and light mode 
 * @returns 
 */
const Search = (props) => {
    const [enterpriseName,setEnterpriseName] = useState()
    let navigate = useNavigate()


   



    return (
        <div className={`bodyheader--body-search ${props.theme}`}>
            <Link to={`/`} className={`bodyheader--icon-enterprise ${props.theme}`}>E</Link>
            <form onSubmit={()=> navigate(`search/${enterpriseName}`)}>
            <input type="text" onChange={(e) => {setEnterpriseName(e.target.value)}} className={`bodyheader--input-text ${props.theme}`} placeholder="¿Que empresa buscas?" name="search" id="search-enterprise" />
            </form>
        </div>
    )
}

export default Search
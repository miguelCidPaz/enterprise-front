import { Link } from 'react-router-dom';

/**
 * This is the search box and it contains the icon and an input text
 * @param {*} props
 * @param {String} theme dark and light mode 
 * @returns 
 */
const Search = (props) => {

    return (
        <div className={`bodyheader--body-search ${props.theme}`}>
            <Link to={`/`} className={`bodyheader--icon-enterprise ${props.theme}`}>E</Link>
            <input type="text" className={`bodyheader--input-text ${props.theme}`} placeholder="¿Que empresa buscas?" name="search" id="search-enterprise" />
        </div>
    )
}

export default Search
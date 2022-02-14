const Search = (props) => {

    return (
        <div className={`bodyheader--body-search ${props.theme}`}>
            <button className={`bodyheader--icon-enterprise ${props.theme}`}>E</button>
            <input type="text" className={`bodyheader--input-text ${props.theme}`} placeholder="¿Que empresa buscas?" name="search" id="search-enterprise" />
        </div>
    )
}

export default Search
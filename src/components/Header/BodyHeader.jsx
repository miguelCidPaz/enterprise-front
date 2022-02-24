import MenuLinks from './internal-components/MenuLinks'
import Search from './internal-components/Search'
import './styles.scss'

/**
 * This is a container for the header
 * @param {*} props
 * @param {String} theme dark and light mode 
 * @returns 
 */
const BodyHeader = (props) => {

    return (
        <header className={`bodyheader--main ${props.theme}`}>
            <div className={`center-container-limits ${props.theme}`}>
                <Search theme={props.theme} />
                <MenuLinks turnLight={props.turnLight} theme={props.theme} />
            </div>
        </header>
    )
}

export default BodyHeader
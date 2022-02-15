import MenuLinks from './internal-components/MenuLinks'
import Search from './internal-components/Search'
import './styles.scss'

const BodyHeader = (props) => {

    console.log(props)
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
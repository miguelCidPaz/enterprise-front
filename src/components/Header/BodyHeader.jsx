import MenuLinks from './internal-components/MenuLinks'
import Search from './internal-components/Search'
import './styles.css'
import './animations.css'

const BodyHeader = () => {

    return (
        <header className='bodyheader--main'>
            <Search />
            <MenuLinks />
        </header>
    )
}

export default BodyHeader
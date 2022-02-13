import MenuLinks from './internal-components/MenuLinks'
import Search from './internal-components/Search'
import './styles.scss'

const BodyHeader = () => {

    return (
        <header className='bodyheader--main'>
            <div className='center-container-limits'>
                <Search />
                <MenuLinks />
            </div>
        </header>
    )
}

export default BodyHeader
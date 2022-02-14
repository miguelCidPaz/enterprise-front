import MenuLinks from './internal-components/MenuLinks'
import Search from './internal-components/Search'
import './styles.scss'

const BodyHeader = (props) => {
    const { setTheme } = props;

    console.log(props.setTheme)
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
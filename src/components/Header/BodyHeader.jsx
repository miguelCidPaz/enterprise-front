import { useEffect, useState } from 'react'
import MenuLinks from './internal-components/MenuLinks'
import Search from './internal-components/Search'
import './styles.css'

const BodyHeader = () => {
    const { width, setWidth } = useState(window.innerWidth);
    const { mobile, setMobile } = useState();


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
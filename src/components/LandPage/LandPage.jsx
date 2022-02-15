import './styles.scss';
import rocket from '../../assets/img/rocket-blue.svg'
import rocket1 from '../../assets/img/rocket-orange.svg'
import { Link } from 'react-router-dom';

const LandPage = (props) => {

    return (
        <section className='landpage--main'>
            <div className='landpage--img-container'>
                {props.theme === 'dark'
                    ? <img className='landpage--rocket' src={rocket1} alt="Rocket" />
                    : <img className='landpage--rocket' src={rocket} alt="Rocket" />}

            </div>
            <div className='landpage--text-container'>
                <h1 className='landpage--text'>Buy you</h1>
                <h2 className='landpage--text-1'>StartUp</h2>
                <Link to={'/ranking'} className='landpage--button'>BUY</Link>
            </div>
        </section>
    )
}

export default LandPage
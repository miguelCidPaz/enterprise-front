import './styles.scss';
import rocket from '../../assets/img/rocket-landPage.svg'

const LandPage = () => {

    return (
        <section className='landpage--main'>
            <div className='landpage--img-container'>
                <img className='landpage--rocket' src={rocket} alt="Rocket" />
            </div>
            <div className='landpage--text-container'>
                <h1 className='landpage--text'>Buy you</h1>
                <h2 className='landpage--text-1'>StartUp</h2>
                <button className='landpage--button'>BUY</button>
            </div>
        </section>
    )
}

export default LandPage
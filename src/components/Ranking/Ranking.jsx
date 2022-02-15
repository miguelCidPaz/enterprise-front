import Filter from "../Filter/Filter"
import './styles.scss'

const Ranking = (props) => {

    return (
        <section className={`ranking--main ${props.theme}`}>
            <Filter theme={props.theme} />
        </section>
    )
}

export default Ranking
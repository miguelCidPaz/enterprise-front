import Filter from "../Filter/Filter"
import TableItems from "../TableItems/TableItems"
import './styles.scss'

const Ranking = (props) => {

    return (
        <section className={`ranking--main ${props.theme}`}>
            <Filter theme={props.theme} />
            <TableItems theme={props.theme} />
        </section>
    )
}

export default Ranking
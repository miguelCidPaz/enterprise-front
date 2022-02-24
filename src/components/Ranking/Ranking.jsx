import Filter from "../Filter/Filter"
import TableItems from "../TableItems/TableItems"
import './styles.scss'

/**
 * This is a container to display the navigation content
 * @param {*} props
 * @param {String} theme dark and light theme
 * @returns 
 */
const Ranking = (props) => {

    return (
        <section className={`ranking--main ${props.theme}`}>
            <Filter theme={props.theme} />
            <TableItems theme={props.theme} />
        </section>
    )
}

export default Ranking
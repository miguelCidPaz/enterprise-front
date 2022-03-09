import { useState } from "react"
import BodyDetail from "./BodyDetail";

const DetailCard = (props) => {
    const [viewSelect, setViewSelect] = useState(false)
    const [viewSecondary, setViewSecondary] = useState(false);
    const [secondaryItem, setSecondaryItem] = useState(undefined);

    return (
        <section className="details--main">
            <button onClick={e => props.setDetail(undefined)} className="details--button-close">x</button>

            <BodyDetail />

            {viewSelect ?
                <div className="details--select-compare"></div>
                : null}

            {viewSecondary ?
                <BodyDetail />
                : null}

        </section>
    )
}

export default DetailCard
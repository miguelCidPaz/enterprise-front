import { useState } from "react"
import BodyDetail from "./BodyDetail";
import ScrollCompare from "./ScrollCompare";
import './styles.scss';

const DetailCard = (props) => {
    const [firstItem, setFirstItem] = useState(props.item);
    const [secondaryItem, setSecondaryItem] = useState(undefined);
    const [viewSelect, setViewSelect] = useState(false)
    const [viewSecondary, setViewSecondary] = useState(false);
    const [page,setPage] = useState(props.page)

    const changeSecondaryItem = (item) => {
        setSecondaryItem(item)
        setViewSecondary(!viewSecondary)
        setViewSelect(!viewSelect)
    }
    console.log(page)

    const selectNewPrincipalItem = (item) => {
        setFirstItem(item)
        setSecondaryItem(undefined)
        setViewSecondary(false)
    }


    return (
        <section className="details--main">
            <button onClick={e => props.setDetail(undefined)} className="details--button-close"><p>x</p></button>

            <div className="details--container">
                <BodyDetail
                    item={firstItem}
                    setViewSelect={setViewSelect}
                    viewSelect={viewSelect}
                    viewSecondary={viewSecondary}
                    selectNewPrincipalItem={selectNewPrincipalItem}
                    page={page}
                />

                {viewSelect ?
                    <ScrollCompare
                        groupItems={props.groupItems}
                        setSecondaryItem={changeSecondaryItem}
                    />
                    : null}

                {viewSecondary ?
                    <BodyDetail
                        item={secondaryItem}
                        setViewSelect={setViewSelect}
                        viewSelect={viewSelect}
                        viewSecondary={viewSecondary}
                        selectNewPrincipalItem={selectNewPrincipalItem}
                    />
                    : null}
            </div>
        </section>
    )
}

export default DetailCard
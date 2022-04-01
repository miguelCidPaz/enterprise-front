import { useState } from "react"
import ItemCard from "../ItemCard/ItemCard"

const ScrollCompare = (props) => {
    const [index, setIndex] = useState(0)
    const [itemGroup, setItemGroup] = useState(props.groupItems)

    return (
        <div>
            <div className="details--main-compare">
                {itemGroup[index] !== undefined && itemGroup[index] !== null
                    ? itemGroup[index].map((e, i) => <ItemCard item={e} setDetail={props.setSecondaryItem} key={i} index={i} />)
                    : null}

                <div className="details--controls-compare">
                    <button className="details--button" onClick={e => index === 0 ? setIndex(itemGroup.length - 1) : setIndex(index - 1)}>{"<"}</button>
                    <button className="details--button" onClick={e => index === itemGroup.length - 1 ? setIndex(0) : setIndex(index + 1)}>{">"}</button>
                </div>
            </div>

        </div>

    )
}

export default ScrollCompare
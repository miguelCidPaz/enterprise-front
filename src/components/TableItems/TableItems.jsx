const TableItems = () => {

    const numbers = [1, 2, 3, 4, 5, 6]
    return (
        <section className="tableitems--main">
            <div className="tableitems--interior-body">

            </div>
            <div className="tableitems--pagination">
                {numbers.map(e => {
                    <div className="tableitems--pagination-container">
                        <p>{e}</p>
                    </div>
                })}
            </div>
        </section>
    )
}

export default TableItems;
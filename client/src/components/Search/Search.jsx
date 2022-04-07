import "./Search.css"

export const Search = (props) => {
    const { onAdd, onFilter, filterValue, totalAmount, onCancelBuy} = props
    return (
        <div className="search__container">
            <img
                alt="plus"
                src="data:image/png;base64,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"
                className="modal__add__img"
                onClick={onAdd}
            />
            <label htmlFor="">
                Шукати:
                <input
                    className="input__search"
                    type='search'
                    value={filterValue}
                    onChange={(e) => onFilter(e.target.value)}
                />
            </label>
            <div>
                Total price: {totalAmount} грн.
                { totalAmount > 0 &&
                    <button className="form__button" onClick={onCancelBuy}>Cancel</button>
                }
            </div>
        </div>
    );
};
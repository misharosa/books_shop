import "./Search.css"

export const Search = ({ setFilterValue, filterValue }) => {

    return (
        <label htmlFor="">
            Шукати:
            <input
                className="input__search"
                type='search'
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
            />
        </label>
    );
};
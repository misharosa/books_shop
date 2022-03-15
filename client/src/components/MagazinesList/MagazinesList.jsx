import React, { useMemo, useState } from 'react';
import { MagazinesItem } from "./MagazinesItem/MagazinesItem";
import { Search } from "../Search/Search";
import "./MagazinesList.css"

export const MagazinesList = ({ magazines }) => {
    const [filterMagazineValue, setFilterMagazineValue] = useState('')

    const handleFilterMagazines = useMemo(() => {
        return magazines.filter(book => (
            book.name.toLowerCase().includes(filterMagazineValue.toLowerCase())
        ))
    }, [filterMagazineValue, magazines])

    return (
        <>
            <Search
                setFilterValue={setFilterMagazineValue}
                filterValue={filterMagazineValue}
            />
            <div className="magazines">
                {
                    handleFilterMagazines.map(magazine =>(
                        <div className="magazines__item" key={magazine.id}>
                            <MagazinesItem magazine={magazine} />
                        </div>
                    ) )
                }
            </div>
        </>
    );
};

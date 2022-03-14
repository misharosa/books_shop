import React, { useMemo, useState } from 'react';
import { GoodItem } from "./GoodItem/GoodItem";
import { Search } from "../Search/Search";
import { goods } from "../../data/goods";
import "./GoodsList.css"

export const GoodsList = () => {

    const [filterValue, setFilterValue] = useState('')

    const handleFilterGoods = useMemo(() => {
        return goods.filter(good => (
            good.name.toLowerCase().includes(filterValue.toLowerCase())
        ))
    }, [filterValue])

    return (
        <>
            <Search
                setFilterValue={setFilterValue}
                filterValue={filterValue}
            />
            <div className='goods'>
                {handleFilterGoods.map(good => (
                    <div key={good.id} className="goods__item" >
                        <GoodItem good={good}/>
                    </div>
                ))}
            </div>
        </>
    );
};

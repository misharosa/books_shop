import React, {useEffect, useMemo, useState} from 'react';
import { useParams } from "react-router-dom";
import { getItemsFromServer } from "../../api/api";
import { Search } from "./Search/Search";
import { GoodItem } from "./GoodsItem/GoodItem";
import "./ItemsList.css"

const ItemsList = () => {
    const { name } = useParams()
    const [items, setItems] = useState([])
    const [filterValue, setFilterValue] = useState('')

    useEffect( () => {
        async function getItems () {
            const allProduct = await getItemsFromServer(name)
            await setItems(allProduct)
        }
        getItems()
    },[name, setItems])

    const handleItemsFilter= useMemo(() => {
        return items.filter(book => (
            book.name.toLowerCase().includes(filterValue.toLowerCase())
        ))
    }, [filterValue, items])

    return (
        <>
            <Search
                setFilterValue={setFilterValue}
                filterValue={filterValue}
            />
            {handleItemsFilter.length > 0 &&
                <div className='goods'>
                    {handleItemsFilter.map(item => (
                        <div key={item.id} className="goods__item" >
                            <GoodItem name={name} item={item}/>
                        </div>
                    ))}
                </div>
            }
        </>
    );
};

export default ItemsList;
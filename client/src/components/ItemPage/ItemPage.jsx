import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ItemPage.css"

const ItemPage = ({ items, setItems, setAllItemsObj, allItemsObj }) => {
    const { id, name } = useParams()
    const [item, setItem] = useState(undefined)

    useEffect(() => {
        setItem(items.find(item => item.id === id))
    },[id, items])

    const handleDelete = (itemId) => {
        const filterDelete = allItemsObj[name].filter(item => item.id !== itemId)
        setItems(filterDelete)
        setAllItemsObj((prev) => ({
            ...prev,
            [name]: filterDelete
        }))
    }

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <>
        {item &&
            <div className="good__item">
                <img className="good__item-img" src={item.poster} alt="book_img"/>
                <p className="good__item-name">{item.name}</p>
                <div className="good__item-price">{item.price} грн.</div>
                <div className="good__item-buttons">
                    <button className="good__item-button">Edit</button>
                    <Link to={`/books_shop/${name}`} className="good__item-button" onClick={() => handleDelete(item.id)}>Delete</Link>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/17/17699.png" alt="back_img" className="good__item_button-back" onClick={() => goBack()} />
            </div>
        }
        </>
    );
};

export default ItemPage;

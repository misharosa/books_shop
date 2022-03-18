import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import "./ItemPage.css"
// import {getItemsFromServer} from "../../api/api";

const ItemPage = ({ items }) => {
    const { id } = useParams()
    const [item, setItem] = useState(undefined)

    useEffect(() => {
        (items && setItem(items.find(item => item.id === id)))
    },[id, items])

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <>
        {item  &&
            <div className="good__item">
                <img className="good__item-img" src={item.poster} alt="book_img"/>
                <p className="good__item-name">{item.name}</p>
                <div className="good__item-price">{item.price} грн.</div>
                <img src="https://cdn-icons-png.flaticon.com/512/17/17699.png" alt="back_img" className="good__item_button-back" onClick={() => goBack()} />
            </div>
        }
        </>
    );
};

export default ItemPage;

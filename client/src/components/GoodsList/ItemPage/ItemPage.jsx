import React from 'react';
import { useParams } from "react-router-dom";
import { goods } from "../../../data/goods";
import "./ItemPage.css"

export const ItemPage = () => {
    const {id} = useParams()
    const good = goods.find(good => good.id === id)

    return (
        <>
            { good !== undefined &&
                <div className="item">
                <img className="item_img" src={good.poster} alt="book_img"/>
                <p className="item_name">{good.name}</p>
                <div className="item_price">{good.price} грн.</div>
                </div>
            }
                </>
    );
};

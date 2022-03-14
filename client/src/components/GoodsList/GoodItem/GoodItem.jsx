import React from 'react';
import "./GoodItem.css"
import { Link } from "react-router-dom";

export const GoodItem = ({ good }) => {
    return (
        <Link to={`/${good.id}`}>
            <img className="goods_img" src={good.poster} alt="book_img"/>
            <p className="goods_name">{good.name}</p>
            <div className="goods_price">{good.price} грн.</div>
        </Link>
    );
};
import React from 'react';
import "./GoodItem.css"
import { Link } from "react-router-dom";

export const GoodItem = ({ item, name }) => {

    return (
        <Link className="good" to={`/books_shop/${name}/${item.id}`}>
            <img className="goods_img" src={item.poster} alt="book_img"/>
            <p className="goods_name">{item.name}</p>
            <div className="goods_price">{item.price} грн.</div>
        </Link>
    );
};

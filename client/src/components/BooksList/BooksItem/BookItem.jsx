import React from 'react';
import "./BookItem.css"
import { Link } from "react-router-dom";

export const BookItem = ({ book }) => {
    return (
        <Link className="good" to={`/books_shop/books/${book.id}`}>
            <img className="goods_img" src={book.poster} alt="book_img"/>
            <p className="goods_name">{book.name}</p>
            <div className="goods_price">{book.price} грн.</div>
        </Link>
    );
};

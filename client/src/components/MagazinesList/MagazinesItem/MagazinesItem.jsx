import React from 'react';
import "./MagazinesItem.css"
import { Link } from "react-router-dom";

export const MagazinesItem = ({ magazine }) => {
    return (
        <Link className="magazine" to={`/books_shop/magazines/${magazine.name}`}>
            <img className="magazines__img " src={magazine.poster} alt="book_img"/>
            <p className="magazines_name">{magazine.name}</p>
            <div className="magazines_price">{magazine.price} грн.</div>
        </Link>
    );
};



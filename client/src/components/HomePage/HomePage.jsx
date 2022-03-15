import React from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css"

export const HomePage = () => {
    return (
        <div className="store__list">
            <Link className="store__item" to="/books_shop/books">Books</Link>
            <Link className="store__item" to="/books_shop/magazines">Magazines</Link>
        </div>
    );
};

import React from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css"

export const HomePage = () => {
    return (
        <div className="store">
            <img
                    className="store__img"
                    src="https://previews.123rf.com/images/pauldesign/pauldesign1601/pauldesign160100033/51548041-welcome-we-are-open-a-welcome-sign-for-cafes-or-shop-visitors-on-blackboard-background-with-chalk-ha.jpg"
                    alt="shop"
            />
            <div className="store__list">
                <Link className="store__item" to="/books_shop/books">Books</Link>
                <Link className="store__item" to="/books_shop/magazines">Magazines</Link>
            </div>
        </div>
    );
};

import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
       <div className="header-container">
           <ul className="header__list">
               <Link to="/books_shop" className="header__item">Home</Link>
               <Link to="/books_shop" className="header__item">List</Link>
               <Link to="/books_shop" className="header__item">Other</Link>
               <Link to="/books_shop" className="header__item">Exit</Link>
           </ul>
       </div>
    );
};

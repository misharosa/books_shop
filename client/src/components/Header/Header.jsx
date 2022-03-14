import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
       <div className="header-container">
           <ul className="header__list">
               <Link to="/" className="header__item">Home</Link>
               <li className="header__item">Search</li>
               <li className="header__item">List</li>
               <Link to="/" className="header__item">Exit</Link>
           </ul>
       </div>
    );
};

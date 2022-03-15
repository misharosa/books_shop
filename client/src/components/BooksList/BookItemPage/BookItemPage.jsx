import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import "./BookItemPage.css"

export const ItemBookPage = ({ books }) => {
    const { id } = useParams()
    const book = books.find(good => good.id === id)
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <>
            { book !== undefined &&
                <div className="book__item">
                    <img className="book__item-img" src={book.poster} alt="book_img"/>
                    <p className="book__item-name">{book.name}</p>
                    <div className="book__item-price">{book.price} грн.</div>
                    <img src="https://cdn-icons-png.flaticon.com/512/17/17699.png" alt="back_img" className="book__item_button-back" onClick={() => goBack()} />
                </div>
            }
        </>
    );
};

import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { goods } from "../../../data/goods";
import "./ItemPage.css"

export const ItemPage = () => {
    const { id } = useParams()
    const good = goods.find(good => good.id === id)
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <>
            { good !== undefined &&
                <>
                <div className="item">
                    <img className="item__img" src={good.poster} alt="book_img"/>
                    <p className="item__name">{good.name}</p>
                    <div className="item__price">{good.price} грн.</div>
                    <img src="https://w7.pngwing.com/pngs/531/313/png-transparent-logo-organization-human-back-business-back-button-angle-text-trademark.png" alt="back_img" className="item__button-back" onClick={() => goBack()} />
                </div>
                </>
            }
        </>
    );
};

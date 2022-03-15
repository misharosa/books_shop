import React from 'react';
import { useNavigate, useParams} from "react-router-dom";
import "./ItemMagazinePage.css"

export const ItemMagazinePage = ({ magazines }) => {
    const { name } = useParams()
    const magazine = magazines.find(magazine => magazine.name === name)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div className="magazine__item">
            <img className="magazine__item-img" src={magazine.poster} alt="book_img"/>
            <p className="magazine__item-name">{magazine.name}</p>
            <p className="magazine__item-text"><span style={{fontWeight:700}}>Description:</span> {magazine.text}</p>
            <div className="magazine__item-price"> {magazine.price} грн.</div>
            <img
                src="https://cdn-icons-png.flaticon.com/512/17/17699.png"
                alt="back_img"
                className="magazine__item_button-back"
                onClick={() => goBack()}
            />
        </div>
    );
};
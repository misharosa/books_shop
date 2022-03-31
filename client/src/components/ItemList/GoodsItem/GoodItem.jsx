import React, {useContext} from 'react';
import "./GoodItem.css"
import { ThemeContext } from "../../Context/context";

export const GoodItem = ({ item }) => {
        const { handleDelete, handleEditBook, handleBuy} = useContext(ThemeContext)
    return (
        <>
            <div>
                <div className="good">
                    <img className="goods_img" src={item.poster} alt="book_img"/>
                    <p className="goods_name">{item.name}</p>
                    <div className="goods_price">{item.price} грн.</div>
                </div>
                <div className="good__item-buttons">
                    <button className="good__item-button open-modal" onClick={() => handleEditBook(item)}>Edit</button>
                    <button className="form__button" onClick={() => handleBuy(item)}>Buy</button>
                    <button className="good__item-button" onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            </div>

        </>
    );
};

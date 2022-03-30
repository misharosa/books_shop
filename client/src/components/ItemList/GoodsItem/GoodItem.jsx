import React from 'react';
import "./GoodItem.css"

export const GoodItem = (
    {
        item,
        onDelete,
        onEdit
    }) => {

    return (
        <>
            <div>
                <div className="good">
                    <img className="goods_img" src={item.poster} alt="book_img"/>
                    <p className="goods_name">{item.name}</p>
                    <div className="goods_price">{item.price} грн.</div>
                </div>
                <div className="good__item-buttons">
                    <button className="good__item-button open-modal" onClick={() => onEdit(item)}>Edit</button>
                    <button className="good__item-button" onClick={() => onDelete(item.id)}>Delete</button>
                </div>
            </div>

        </>
    );
};

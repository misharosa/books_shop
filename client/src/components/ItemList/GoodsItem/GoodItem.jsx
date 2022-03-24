import React from 'react';
import "./GoodItem.css"
import { Modal } from "../../Modal/Modal";

export const GoodItem = (
    {
        item,
        handleDelete,
        modalEditActive,
        setModalEditActive,
        handleEdit,
        nameEdit,
        setNameEdit,
        priceEdit,
        setPriceEdit,
        editItem,
        handleFind
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
                    <button className="good__item-button open-modal" onClick={() => handleFind(item.id)}>Edit</button>
                    <button className="good__item-button" onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            </div>
            <Modal active={modalEditActive} setActive={setModalEditActive}>
                <form onSubmit={(e) => handleEdit(e, editItem)} className="form">
                    <label >
                        Name:
                        <textarea className="form__item" value={nameEdit} onChange={(e) => setNameEdit(e.target.value) } />
                    </label>
                    <label>
                        Price:
                        <input className="form__item" value={priceEdit} onChange={(e) => setPriceEdit(e.target.value) } />
                    </label>
                    <button type="submit" className="form__button">Submit</button>
                </form>
            </Modal>
        </>
    );
};

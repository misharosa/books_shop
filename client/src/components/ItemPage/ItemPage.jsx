import React, {useEffect, useState} from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ItemPage.css"
import { Modal } from "../Modal/Modal";

const ItemPage = (
    {
        items,
        setItems,
        setAllItemsObj,
        allItemsObj,
        item,
        setItem,
        modalActive,
        setModalActive
    }) => {
    const { id, name } = useParams()

    const [nameEdit, setNameEdit] = useState('')
    const [priceEdit, setPriceEdit] = useState('')

    useEffect(() => {
        setItem(items.find(item => item.id === id))

        if (item !== undefined) {
            setNameEdit(item.name)
            setPriceEdit(item.price)
        }
    },[id, items, setItem, item])

    const handleEdit = (e) => {
        e.preventDefault()
        setModalActive(false)
        const editItem = allItemsObj[name].map(char => {
            if (char.id === item.id) {
                return {
                    ...char,
                    name: nameEdit,
                    price: priceEdit
                }
            }

            return char
        })

        setItem({...item, name: nameEdit, price: priceEdit})

        setItems(editItem)
        setAllItemsObj((prev) => ({
            ...prev,
            [name]: editItem
        }))
    }

    const handleDelete = (itemId) => {
        const filterDelete = allItemsObj[name].filter(item => item.id !== itemId)
        setItems(filterDelete)
        setAllItemsObj((prev) => ({
            ...prev,
            [name]: filterDelete
        }))
    }

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <>
        {item &&
            <>
            <div className="good__item">
                <img className="good__item-img" src={item.poster} alt="book_img"/>
                <p className="good__item-name">{item.name}</p>
                <div className="good__item-price">{item.price} грн.</div>
                <div className="good__item-buttons">
                    <button className="good__item-button open-modal" onClick={() => setModalActive(true)}>Edit</button>
                    <Link to={`/books_shop/${name}`} className="good__item-button" onClick={() => handleDelete(item.id)}>Delete</Link>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/17/17699.png" alt="back_img" className="good__item_button-back" onClick={() => goBack()} />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <form onSubmit={handleEdit} className="form">
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
        }
        </>
    );
};

export default ItemPage;

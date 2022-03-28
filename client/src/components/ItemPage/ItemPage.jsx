import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ItemPage.css"
import { Modal } from "../Modal/Modal";
import { deleteItemsFromServer, editItemFromServer, getItemsFromServer } from "../../api/api";

export const ItemPage = (
    {
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

    useEffect( () => {
        async function setCurrentItem(){
            const  data  = await getItemsFromServer(name)
            const currentItem = data.find(item => item.id === id)
            if (currentItem) {
                setItem(currentItem)
                setNameEdit(currentItem.name)
                setPriceEdit(currentItem.price)
            }
        }
        setCurrentItem().catch(e => console.log(e.message))
    },[id, name, setItem])

    const handleEdit = (e) => {
        e.preventDefault()
        setModalActive(false)
        const editItems = allItemsObj[name].map(char => {
            if (char.id === item.id) {
                const editItem = {
                    ...char,
                    name: nameEdit,
                    price: priceEdit
                }

                editItemFromServer(name, editItem).then(r => console.log(r))

                return editItem
            }

            return char
        })

        setItem({...item, name: nameEdit, price: priceEdit})

        setItems(editItems)
        setAllItemsObj((prev) => ({
            ...prev,
            [name]: editItems
        }))
    }

    const handleDelete = (itemId) => {
        deleteItemsFromServer(name, itemId).then(r => r)
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
            </>
        }
        </>
    );
};

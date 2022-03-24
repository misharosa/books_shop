import React, { useEffect, useMemo, useState } from 'react';
import {addItemToServer, deleteItemsFromServer, editItemFromServer, getItemsFromServer} from "../../api/api";
import { ItemsList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const BooksPage = ({ items, setItems }) => {

    const { name } = useParams()
    const [editItem, setEditItem] = useState({})
    const [filterValue, setFilterValue] = useState('');
    const [modalEditActive, setModalEditActive] = useState(false);
    const [modalAddActive, setModalAddActive] = useState(false)
    const [nameEdit, setNameEdit] = useState('')
    const [priceEdit, setPriceEdit] = useState('')

    useEffect(() => {
            const getItems = async () => {
                return await getItemsFromServer(name);
            };
            getItems().then((r) => setItems(r));

    }, [name, setItems])

   const handleAdd = (e) => {
        e.preventDefault()
       const newGood = {
           name: nameEdit ,
           price: priceEdit,
           id: items.length + 1,
           poster: "https://cdn4.vectorstock.com/i/1000x1000/23/48/shoping-and-different-goods-vector-4422348.jpg"
       }

       addItemToServer(name, newGood).then(r => r)

        setItems(prev => [
            ...prev,
            newGood
          ]
        )
       setModalAddActive(false)
       setNameEdit('')
       setPriceEdit('')
   }

    const handleDelete = (itemId) => {
        deleteItemsFromServer(itemId).then(r => r)
        const filterDelete = items.filter(item => item.id !== itemId)
        setItems(filterDelete)

    }

    const handleFind = (itemId) => {
        const editItem = items.find(item => item.id === itemId)
        console.log("I`m here")
        setNameEdit(editItem.name)
        setPriceEdit(editItem.price)
        setModalEditActive(true)
        console.log(modalEditActive)
        setEditItem({
            ...editItem,
            name: editItem.name,
            price: editItem.price
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setModalEditActive(false)
        const editItems = items.map(char => {
            if (char.id === editItem.id) {
                const editItem = {
                    ...char,
                    name: nameEdit,
                    price: priceEdit
                }
                editItemFromServer("books", editItem).then(r => console.log(r))
                return editItem
            }
            return char
        })
        setItems(editItems)
    }

    const handleItemsFilter = useMemo(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(filterValue.toLowerCase())
        );
    }, [items, filterValue]);

    return (
        <div>
            <ItemsList
                modalAddActive={modalAddActive}
                setModalAddActive={setModalAddActive}
                setModalEditActive={setModalEditActive}
                modalEditActive={modalEditActive}
                handleAdd={handleAdd}
                setFilterValue={setFilterValue}
                filterValue={filterValue}
                setNameEdit={setNameEdit}
                setPriceEdit={setPriceEdit}
                nameEdit={nameEdit}
                priceEdit={priceEdit}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleFind={handleFind}
                items={handleItemsFilter}
                editItem={editItem}
                setEditItem={setEditItem}
            />
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import { addItemToServer, deleteItemsFromServer, editItemFromServer, getItemsFromServer } from "../../api/api";
import { ItemsList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const BooksPage = () => {
    const { name } = useParams()
    const [items, setItems] = useState([]);
    const [editItem, setEditItem] = useState({ editModal: false, addModal: false, name: '', price: '' })

    useEffect(() => {
        const local = localStorage.getItem(name)

        if (!local) {
            getItemsFromServer(name).then((r) => {
                localStorage.setItem(name, JSON.stringify(r))
                setItems(r)
            });
        } else {
            setItems(JSON.parse(local))
        }
    }, [name, setItems])

   const handleAdd = (e) => {
        e.preventDefault()
        const newGood = {
           name: editItem.name ,
           price: editItem.price,
           id: items.length + 1,
           poster: "https://cdn4.vectorstock.com/i/1000x1000/23/48/shoping-and-different-goods-vector-4422348.jpg"
        }

        addItemToServer(name, newGood).catch(e => console.log(e.message))
        items.push(newGood)
        setItems([...items])
        localStorage.setItem(name, JSON.stringify([...items]))
        setEditItem({ editModal:false, addModal: false })
   }

    const handleDelete = (itemId) => {
        deleteItemsFromServer(name, itemId).catch(e => console.log(e.message))
        const filterDelete = items.filter(item => item.id !== itemId)
        setItems(filterDelete)
        localStorage.setItem(name, JSON.stringify([...filterDelete]))
    }

    const handleEdit = (e) => {
        e.preventDefault()

        const findEditItem = items.findIndex(i => editItem.id === i.id)

        items.splice(findEditItem, 1, editItem)
        setItems([...items])
        localStorage.setItem(name, JSON.stringify([...items]))
        editItemFromServer(name, editItem).catch(e => console.log(e.message))
        setEditItem({editModal:false, addModal: false})
    }

    return (
        <div>
            <ItemsList
                onAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                editItem={editItem}
                setEditItem={setEditItem}
                items={items}
                setItems={setItems}
            />
        </div>
    );
};

import React, { useEffect, useMemo, useState } from 'react';
import { addItemFromServer, deleteItemsFromServer, editItemFromServer, getItemsFromServer } from "../../api/api";
import { MemorizeItemsList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Search } from "../Search/Search";
import { Modal } from "../Modal/Modal";
import { ThemeContext } from "../Context/context";

export const ItemsPageContainer = () => {
    const { name } = useParams()
    const [items, setItems] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [totalAmount, setTotalAmount] = useState(0)

    const [editItem, setEditItem] = useState(null)
    const [addItem, setAddItem] = useState(null)

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

    const handleAdd = () => {
        setAddItem({
            id: Math.random(),
            name: '',
            price: '',
            poster: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80',
        });
    };

    const handleAddNewItem = (e) => {
       e.preventDefault()

        addItemFromServer(name, addItem).catch(e => console.log(e.message))
        items.push(addItem)
        setItems([...items])
        setAddItem(null)
        localStorage.setItem(name, JSON.stringify([...items]))
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
        setEditItem(null)
    }

    const handleEditBook = (itemOnEdit) => {
        setEditItem(itemOnEdit);
    };

    const handleFilter = (_filterValue) => {
        setFilterValue(_filterValue);
    };

    const filterItems = useMemo(() => {
        const callbackFilter = (item) => item.name.toLowerCase().includes(filterValue.toLowerCase())

        return items.filter(callbackFilter);
    }, [items, filterValue]);

    const handleBuy = (itemBuy) => {
        setTotalAmount(prev => (prev + +itemBuy.price))
    }

    const handleCancelBuy = () => {
        setTotalAmount(0)
    }

    const handleCloseAddModal = () => {
        setEditItem(null)
    }

    const handleCloseEditModal = () => {
        setEditItem(null)
    }

    return (
        <div>
            <Search
                onAdd={handleAdd}
                onFilter={handleFilter}
                onCancelBuy={handleCancelBuy}
                filterValue={filterValue}
                totalAmount={totalAmount}
            />
            <ThemeContext.Provider value={{
                filterItems,
                handleDelete,
                handleEditBook,
                handleBuy
            }}>
                <MemorizeItemsList />
            </ThemeContext.Provider>
            <Modal active={addItem} setActive={handleAddNewItem} >
                <h2>You can add goods!</h2>
                <form className="form" method="get">
                    <label>
                        Name:
                        <textarea
                            className="form__item"
                            value={addItem?.name}
                            onChange={(e) => setAddItem({...addItem, name: e.target.value})}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            className="form__item"
                            value={addItem?.price}
                            onChange={(e) => setAddItem({...addItem, price: e.target.value})}
                        />
                    </label>
                    <div className="form__buttons">
                        <button className="form__button" onClick={handleAddNewItem}>Add</button>
                        <button className="form__button" onClick={handleCloseAddModal}>Cancel</button>
                    </div>
                </form>
            </Modal>
            <Modal active={editItem} setActive={handleCloseEditModal}>
                <form className="form">
                    <label >
                        Name:
                        <textarea
                            className="form__item"
                            value={editItem?.name}
                            onChange={(e) => setEditItem({...editItem, name: e.target.value})}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            className="form__item"
                            value={editItem?.price}
                            onChange={(e) => setEditItem({...editItem, price: e.target.value})}
                        />
                    </label>
                    <div className="form__buttons">
                        <button type="submit" className="form__button" onClick={handleEdit}>Submit</button>
                        <button type="submit" className="form__button" onClick={handleCloseEditModal}>Cancel</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};
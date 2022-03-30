import React, { useEffect, useMemo, useState } from 'react';
import { addItemFromServer, deleteItemsFromServer, editItemFromServer, getItemsFromServer } from "../../api/api";
import { ItemsList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Search } from "../Search/Search";
import { Modal } from "../Modal/Modal";

export const BooksPage = () => {
    const { name } = useParams()
    const [items, setItems] = useState([]);
    const [filterValue, setFilterValue] = useState('');

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

    const handleItemsFilter = useMemo(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(filterValue.toLowerCase())
        );
    }, [items, filterValue]);

    return (
        <div>
            {/* Пошук тут, відповідно не треба давати зайві пропси +++ */ }
            {/* список повинен бути нерозумним, він відображає продукти і привязує до них якісь дії, якщо ми їх передали +++ */}
            {/* його не хвилює, що далі станеться і так далі +++ */}
            {/* чому так? Якщо в тебе буде 5 похожих сторінок - ти будеш стоврювати для кожної новий список? */}
            {/* Звичайно ні, ми створюємо лише один, який просто відображає та привязує, відповідно, якщо буде 5 сторінок - уся логіка буде в них, а не в списку */}
            {/* Список -> прийнявб відобразив, привязав дії, якщо вони є - це все */}
            {/* Фільтрація, модалки та інша логіка повинна буде вище (у нашому випадку це ця компонента <BooksPage>) */}
            {/* Коли поміняєш це все, я хочу щоб ти використав реакт контекст для зберігання продуктів і дій для обробки продуктів(едітб добавити, видалити) */}
            <Search
                onAdd={handleAdd}
                onFilter={handleFilter}
                filterValue={filterValue}
            />
            <ItemsList
                items={handleItemsFilter}
                onDelete={handleDelete}
                onEdit={handleEditBook}
            />
            <Modal active={addItem} setActive={setAddItem} >
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
                    <button className="form__button" onClick={handleAddNewItem}>Add</button>
                    <button className="form__button" onClick={() => setAddItem(null)}>Cancel</button>
                </form>
            </Modal>
            <Modal active={editItem} setActive={setEditItem}>
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
                        <button type="submit" className="form__button" onClick={() => handleEditBook(null)}>Cancel</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

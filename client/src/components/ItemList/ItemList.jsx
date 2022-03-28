import React, { useMemo, useState } from 'react';
import { GoodItem } from './GoodsItem/GoodItem';
import './ItemsList.css';
import { Search } from "../Search/Search";
import { Modal } from "../Modal/Modal";

export const ItemsList = (
    {
        items,
        handleDelete,
        handleEdit,
        editItem,
        setEditItem,
        onAdd
    }) => {
    const [filterValue, setFilterValue] = useState('');

    const handleItemsFilter = useMemo(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(filterValue.toLowerCase())
        );
    }, [items, filterValue]);

  return (
    <>
      <Search
          onAdd={onAdd}
          setFilterValue={setFilterValue}
          filterValue={filterValue}
          setEditItem={setEditItem}
          editItem={editItem}
      />
      {items.length > 0 && (
        <div className="goods">
          {handleItemsFilter.map((item) => (
            <div key={item.id} className="goods__item">
              <GoodItem
                  item={item}
                  handleDelete={handleDelete}
                  onEdit={setEditItem}
              />
            </div>
          ))}
        </div>
      )}
        <Modal active={editItem.editModal} setActive={setEditItem}>
            <form onSubmit={(e) => handleEdit(e)} className="form">
                <label >
                    Name:
                    <textarea
                        className="form__item"
                        value={editItem.name}
                        onChange={(e) => setEditItem({...editItem, name: e.target.value})}
                    />
                </label>
                <label>
                    Price:
                    <input
                        className="form__item"
                        value={editItem.price}
                        onChange={(e) => setEditItem({...editItem, price: e.target.value})}
                    />
                </label>
                <button type="submit" className="form__button">Submit</button>
            </form>
        </Modal>
    </>
  );
};

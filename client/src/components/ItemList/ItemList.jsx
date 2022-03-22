import React from 'react';
import { GoodItem } from './GoodsItem/GoodItem';
import './ItemsList.css';
import { Search } from "../Search/Search";

export const ItemsList = (
    {
        items,
        handleDelete,
        modalActive,
        setModalActive,
        handleEdit,
        nameEdit,
        setNameEdit,
        priceEdit,
        setPriceEdit,
        editItem,
        setEditItem,
        handleFind,
        filterValue,
        setFilterValue
    }) => {
  return (
    <>
      <Search setFilterValue={setFilterValue} filterValue={filterValue} />
      {items.length > 0 && (
        <div className="goods">
          {items.map((item) => (
            <div key={item.id} className="goods__item">
              <GoodItem
                  items={items}
                  nameEdit={nameEdit}
                  setNameEdit={setNameEdit}
                  priceEdit={priceEdit}
                  setPriceEdit={setPriceEdit}
                  item={item}
                  handleDelete={handleDelete}
                  modalActive={modalActive}
                  setModalActive={setModalActive}
                  handleEdit={handleEdit}
                  editItem={editItem}
                  setEditItem={setEditItem}
                  handleFind={handleFind}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

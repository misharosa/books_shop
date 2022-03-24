import React from 'react';
import { GoodItem } from './GoodsItem/GoodItem';
import './ItemsList.css';
import { Search } from "../Search/Search";

export const ItemsList = (
    {
        modalEditActive,
        setModalEditActive,
        modalAddActive,
        setModalAddActive,
        items,
        handleDelete,
        handleEdit,
        nameEdit,
        setNameEdit,
        priceEdit,
        setPriceEdit,
        editItem,
        setEditItem,
        handleFind,
        filterValue,
        setFilterValue,
        handleAdd
    }) => {
  return (
    <>
      <Search
          modalAddActive={modalAddActive}
          setModalAddActive={setModalAddActive}
          handleAdd={handleAdd}
          setFilterValue={setFilterValue}
          filterValue={filterValue}
          setNameEdit={setNameEdit}
          nameEdit={nameEdit}
          setPriceEdit={setPriceEdit}
          priceEdit={priceEdit}
      />
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
                  modalEditActive={modalEditActive}
                  setModalEditActive={setModalEditActive}
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

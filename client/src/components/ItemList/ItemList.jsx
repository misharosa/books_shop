import React from 'react';
import { GoodItem } from './GoodsItem/GoodItem';
import './ItemsList.css';
import { Search } from '../Search/Search';

export const ItemsList = ({
  items, // лишити
  handleDelete, // лишити
  modalActive,
  setModalActive,
  handleEdit, // лишити
  nameEdit,
  setNameEdit,
  priceEdit,
  setPriceEdit,
  editItem,
  setEditItem,
  handleFind,
  filterValue,
  setFilterValue, // решта все забрати
}) => {
  // пошук буде на рівні сторінки книжок
  // дуже багато непотрiбних пропсів
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
                item={item} // лишити
                handleDelete={handleDelete} // лишити
                modalActive={modalActive}
                setModalActive={setModalActive}
                handleEdit={handleEdit} // лишити
                editItem={editItem}
                setEditItem={setEditItem}
                handleFind={handleFind} // решта забрати
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

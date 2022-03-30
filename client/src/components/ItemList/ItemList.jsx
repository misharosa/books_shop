import React from 'react';
import { GoodItem } from './GoodsItem/GoodItem';
import './ItemsList.css';

export const ItemsList = (
    {
        items,
        onDelete,
        onEdit
    }) => {

  return (
    <>
      {items.length > 0 && (
        <div className="goods">
          {items.map((item) => (
            <div key={item.id} className="goods__item">
              <GoodItem
                  item={item}
                  onDelete={onDelete}
                  onEdit={onEdit}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

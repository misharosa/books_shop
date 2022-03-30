import React, {useContext} from 'react';
import { GoodItem } from './GoodsItem/GoodItem';
import './ItemsList.css';
import {ThemeContext} from "../Context/context";

export const ItemsList = () => {
    const { handleItemsFilter } = useContext(ThemeContext)
  return (
    <>
      {handleItemsFilter.length > 0 && (
        <div className="goods">
          {handleItemsFilter.map((item) => (
            <div key={item.id} className="goods__item">
              <GoodItem item={item} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

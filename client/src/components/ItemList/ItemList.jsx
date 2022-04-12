import React, {useContext} from 'react';
import { GoodItem } from './GoodsItem/GoodItem';
import './ItemsList.css';
import { ThemeContext } from "../Context/context";

const ItemsList = () => {
    const { filterItems } = useContext(ThemeContext)
  return (
    <>
      {filterItems.length > 0 && (
        <div className="goods">
          {filterItems.map((item) => (
            <div key={item.id} className="goods__item">
              <GoodItem item={item} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export const MemorizeItemsList = React.memo(ItemsList)

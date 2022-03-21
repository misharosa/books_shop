import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemsFromServer } from '../../api/api';
import { Search } from '../Search/Search';
import { GoodItem } from './GoodsItem/GoodItem';
import './ItemsList.css';

// список повинен приймати те що відобразити та якийсь action(actions) який буде передаватися в ListItem на клік (в нашому випадку)
// інша логіка повинна прийматися з пропсів
const ItemsList = ({ items, setItems, allItemsObj, setAllItemsObj }) => {
  const { name } = useParams();

  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    if (!Object.keys(allItemsObj).includes(name)) {
      const getItems = async () => {
        return await getItemsFromServer(name);
      };
      getItems().then((r) => {
        setItems(r);
        setAllItemsObj((prev) => ({
          ...prev,
          [name]: r,
        }));
      });
    } else {
      setItems(allItemsObj[name]);
    }
  }, [setItems, name, allItemsObj, setAllItemsObj]);

  const handleItemsFilter = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [items, filterValue]);

  return (
    <>
      <Search setFilterValue={setFilterValue} filterValue={filterValue} />
      {handleItemsFilter.length > 0 && (
        <div className="goods">
          {handleItemsFilter.map((item) => (
            <div key={item.id} className="goods__item">
              <GoodItem name={name} item={item} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemsList;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { HomePage } from './components/HomePage/HomePage';
import ItemsList from './components/ItemList/ItemList';
import ItemPage from './components/ItemPage/ItemPage';
import { useState } from 'react';

export const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(undefined);
  const [modalActive, setModalActive] = useState(false);
  const [allItemsObj, setAllItemsObj] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/books_shop'} element={<HomePage />} />
          <Route
            path={'/books_shop/:name'}
            element={
              // Список реюзабельний, але це компонент, а не сторінка
              // стоври окріме сторінки для книжок та журналів (або якусь динамічну сторінку, яка підійде і для книжок і для журналів)
              <ItemsList
                items={items}
                setItems={setItems}
                allItemsObj={allItemsObj}
                setAllItemsObj={setAllItemsObj}
              />
            }
          />
          <Route
            path={`/books_shop/:name/:id`}
            element={
              <ItemPage
                items={items}
                setItems={setItems}
                item={item}
                setItem={setItem}
                setAllItemsObj={setAllItemsObj}
                allItemsObj={allItemsObj}
                modalActive={modalActive}
                setModalActive={setModalActive}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

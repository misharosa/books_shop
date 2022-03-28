import React, { useEffect, useMemo, useState } from 'react';
import {
  deleteItemsFromServer,
  editItemFromServer,
  getItemsFromServer,
} from '../../api/api';
import { ItemsList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const BooksPage = ({ items, setItems }) => {
  const { name } = useParams();
  const [editItem, setEditItem] = useState({});
  const [filterValue, setFilterValue] = useState('');
  const [modalActive, setModalActive] = useState(false);
  // для едіту можещ використати useREducer або такий стейт useState({name: 'book_name', price: 'book_price'})
  const [nameEdit, setNameEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');

  useEffect(() => {
    if (items.length === 0) {
      // кразе дай якийсь лоадінг, бо якщо список буде пустий, а запит пройшов успішно юуде сайд ефект
      const getItems = async () => {
        return await getItemsFromServer(name);
      };
      getItems().then((r) => setItems(r));
    }
  }, [name, setItems, items.length]);

  const handleDelete = (itemId) => {
    deleteItemsFromServer(itemId).then((r) => r);
    const filterDelete = items.filter((item) => item.id !== itemId);
    setItems(filterDelete);
  };

  const handleFind = (itemId) => {
    const editItem = items.find((item) => item.id === itemId);

    setNameEdit(editItem.name);
    setPriceEdit(editItem.price);
    setModalActive(true);

    setEditItem({
      ...editItem,
      name: editItem.name,
      price: editItem.price,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setModalActive(false);
    const editItems = items.map((char) => {
      if (char.id === editItem.id) {
        const editItem = {
          ...char,
          name: nameEdit,
          price: priceEdit,
        };
        editItemFromServer('books', editItem).then((r) => console.log(r));
        return editItem;
      }
      return char;
    });
    setItems(editItems);
  };

  const handleItemsFilter = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [items, filterValue]);

  // забагато пропсів, Список має приймати лише айтеми та якісь дії, вся
  // бізнес логіка маю бути тут
  // айтеми можуть бути зразу відфільтрованими (тобто дефолт - то всі, якщо щось в пошуку, то вже результати)
  return (
    <div>
      <ItemsList
        setFilterValue={setFilterValue}
        filterValue={filterValue}
        setNameEdit={setNameEdit}
        setPriceEdit={setPriceEdit}
        nameEdit={nameEdit}
        priceEdit={priceEdit}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleFind={handleFind}
        items={handleItemsFilter}
        modalActive={modalActive}
        setModalActive={setModalActive}
        editItem={editItem}
        setEditItem={setEditItem}
      />
    </div>
  );
};

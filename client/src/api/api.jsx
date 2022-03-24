import axios from 'axios';

export const getItemsFromServer = async (name) => {
  try {
    const { data } = await axios(`http://localhost:3001/${name}`);
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

// edit item
export const editItemFromServer = async (name, item) => {
  try {
    const { data } = await axios.patch(`http://localhost:3001/${name}/${item.id}`, item);
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

// delete item
export const deleteItemsFromServer = async (itemId) => {
  try {
    const { data } = await axios.delete(`http://localhost:3001/books/${itemId}`);
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

// add item

export const addItemToServer = async (name, Item) => {
  try {
    const { data } = await axios.post(`http://localhost:3001/${name}`, Item);
    return data;
  } catch (e) {
    console.error(e.message);
  }
};


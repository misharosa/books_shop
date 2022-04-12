import axios from 'axios';

// get all items
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
    return await axios.patch(`http://localhost:3001/${name}/${item.id}`, item);
};

// delete item
export const deleteItemsFromServer = async (name, itemId) => {
    return await axios.delete(`http://localhost:3001/${name}/${itemId}`);
};

// add item
export const addItemFromServer = async (name, Item) => {
    return await axios.post(`http://localhost:3001/${name}`, Item);
};


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

// delete item

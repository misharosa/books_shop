import axios from 'axios';
// import {useParams} from "react-router-dom";

// const { name, id } = useParams()
// console.log(name, id)
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
export const deleteItemsFromServer = async (name, itemId) => {
  try {
    const { data } = await axios.delete(`http://localhost:3001/${name}/${itemId}`);
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

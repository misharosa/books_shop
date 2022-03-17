import "./App.css"
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage } from "./components/HomePage/HomePage";
import ItemsList from "./components/ItemList/ItemList";
import ItemPage from "./components/ItemPage/ItemPage";
import { useState } from "react";

export const App = () => {
    const [items, setItems] = useState([])

    return (
        <div className='App'>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={'/books_shop'} element={<HomePage />} />
                    <Route path={'/books_shop/:name'}  element={<ItemsList items={items} setItems={setItems} />} />
                    <Route path={`/books_shop/:name/:id`} element={<ItemPage items={items} />} />
                </Route>
            </Routes>
        </div>
    );
}

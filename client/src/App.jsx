import "./App.css"
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage } from "./components/HomePage/HomePage";
import ItemsList from "./components/ItemList/ItemList";
import ItemPage from "./components/ItemPage/ItemPage";

export const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={'/books_shop'} element={<HomePage />} />
                    <Route path={'/books_shop/:name'}  element={<ItemsList />} />
                    <Route path={`/books_shop/:name/:id`} element={<ItemPage />} />
                </Route>
            </Routes>
        </div>
    );
}


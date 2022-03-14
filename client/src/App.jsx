import { GoodsList } from "./components/GoodsList/GoodsList";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { ItemPage } from "./components/GoodsList/ItemPage/ItemPage";
import Layout from "./components/Layout/Layout";

export const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={`/:id`} element={<ItemPage />} />
                    <Route path="/books_shop" element={<GoodsList />} />
                </Route>
            </Routes>
        </div>
    );
}

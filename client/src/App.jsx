import { GoodsList } from "./components/GoodsList/GoodsList";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { ItemPage } from "./components/GoodsList/ItemPage/ItemPage";

export const App = () => {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path={`/:id`} element={<ItemPage />} />
                <Route path="/books_shop" element={<GoodsList />} />
            </Routes>
            <Footer />
        </div>
    );
}

import { BooksList } from "./components/BooksList/BooksList";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { ItemBookPage } from "./components/BooksList/BookItemPage/BookItemPage";
import Layout from "./components/Layout/Layout";
import {useEffect, useState} from "react";
import { HomePage } from "./components/HomePage/HomePage";
import { getBooksFromServer, getMagazinesFromServer } from "./api/api";
import { MagazinesList } from "./components/MagazinesList/MagazinesList";
import { ItemMagazinePage } from "./components/MagazinesList/ItemMagazinePage/ItemMagazinePage";

export const App = () => {
    const [books, setBooks] = useState([])
    const [magazines, setMagazines] = useState([])

   useEffect( () => {
         async function fetchData() {
             const getBooks = await getBooksFromServer()
             const getMagazines = await getMagazinesFromServer()
             setMagazines(getMagazines)
             setBooks(getBooks)
         }
     fetchData()
   },[])

    return (
        <div className='App'>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={'/books_shop'} element={<HomePage />} />
                    <Route path="/books_shop/books" element={<BooksList books={books} />} />
                    <Route path="/books_shop/magazines" element={<MagazinesList magazines={magazines} />} />
                    <Route path="/books_shop/books/:id" element={<ItemBookPage books={books} />} />
                    <Route path="/books_shop/magazines/:name" element={<ItemMagazinePage magazines={magazines} />} />
                </Route>
            </Routes>
        </div>
    );
}


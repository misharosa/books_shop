import React from "react";
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { HomePage } from './components/HomePage/HomePage';
import { BooksPage } from "./components/BooksPage/BooksPage";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/books_shop'} element={<HomePage />} />
                <Route path={'/books_shop/:name'} element={<BooksPage />} />
        </Route>
      </Routes>
    </div>
  );
};

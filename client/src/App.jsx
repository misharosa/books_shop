import React from "react";
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { HomePage } from './components/HomePage/HomePage';
import { ItemsPageContainer } from "./components/ItemsPageContainer/ItemsPageContainer";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/books_shop'} element={<HomePage />} />
                <Route path={'/books_shop/:name'} element={<ItemsPageContainer />} />
        </Route>
      </Routes>
    </div>
  );
};

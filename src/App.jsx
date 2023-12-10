import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import { useDispatch } from 'react-redux';
import {useState, useEffect, Suspense } from 'react';
import Hero from './containers/Hero/Hero.jsx';
import PopularDishesMenu from './containers/PopularDishesMenu/PopularDishesMenu.jsx';
import Discounts from './containers/Discounts/Discounts.jsx';
import { getFilteredProductsFetch } from './store/action/product/actionProduct';
import {fetchCategories} from "./store/action/categories/actionCategories.js";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const perPage = 15;
    const startPage = Math.floor(Math.random() * 5) + 1;

    dispatch(getFilteredProductsFetch(perPage, startPage));
    dispatch(fetchCategories())
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <PopularDishesMenu />
        <Discounts />
      </Suspense>
    </>
  );
}
export default App;

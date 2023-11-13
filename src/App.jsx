import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss";
import Hero from './containers/Hero/Hero.jsx';
import PopularDishesMenu from './containers/PopularDishesMenu/PopularDishesMenu.jsx';
import Discounts from './containers/Discounts/Discounts.jsx';
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from './store/action/product/actionProduct';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const perPage = 15;
    const startPage = Math.floor(Math.random() * 5) + 1;
    dispatch(getAllProducts(perPage, startPage));
  }, [dispatch]);

  const cart = useSelector((state) => state.cart.cart);
  // Save cart in Local Storage on every change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart]);

  return (
    <>
      <Hero />
      <PopularDishesMenu />
      <Discounts />
    </>
  );
}

export default App;
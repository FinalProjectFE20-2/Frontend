import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Hero from './containers/Hero/Hero.jsx';
import PopularDishesMenu from './containers/PopularDishesMenu/PopularDishesMenu.jsx';
import Discounts from './containers/Discounts/Discounts.jsx';
import { getAllProducts } from './store/action/product/actionProduct';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const perPage = 15;
    const startPage = Math.floor(Math.random() * 5) + 1;

    dispatch(getAllProducts(perPage, startPage));
  }, [dispatch]);

  return (
    <>
      <Hero />
      <PopularDishesMenu />
      <Discounts />
    </>
  );
}
export default App;

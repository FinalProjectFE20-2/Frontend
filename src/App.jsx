import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss"
import PopularDishesMenu from './components/PopularDishesMenu';
import Discounts from './containers/Discounts/Discounts.jsx';
import Footer from './containers/Footer/Footer.jsx';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './store/action/product/actionProduct';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const perPage = 15;
    const startPage = Math.floor(Math.random() * 5) + 1;

    dispatch(getAllProducts(perPage, startPage));
}, [dispatch]);

  return (
    <>
      <PopularDishesMenu />
      <Discounts />
      <Footer />
    </>
  );
}

export default App;
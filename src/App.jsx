import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import Header from '@/containers/Header/Header.jsx';
import PopularDishesMenu from './components/PopularDishesMenu';
import Discounts from './containers/Discounts/Discounts.jsx';
import Footer from './containers/Footer/Footer.jsx';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './store/action/product/actionProduct';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllProducts())
  },[dispatch]);
  return (
    <>
      <Header />
      <PopularDishesMenu />
      <Discounts />
      <Footer />
    </>
  );
}

export default App;

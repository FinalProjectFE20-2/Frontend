import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import Container from './containers/Container/Container.jsx';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import Checkout from './containers/Checkout/Checkout.jsx';
import NoPage from './pages/NoPage/NoPage.jsx';
import { Route, Routes } from 'react-router-dom';
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
    // Routing
    <Container>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="basket/checkout" element={<Checkout/>}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </Container>
  );
}

export default App;

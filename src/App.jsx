import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import Container from './containers/Container/Container.jsx';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
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
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Container>
  );
}

export default App;

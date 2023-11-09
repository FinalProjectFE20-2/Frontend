import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import Container from './containers/Container/Container.jsx';
import Home from './pages/Home/Home.jsx';

import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './store/action/product/actionProduct';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllProducts())
  },[dispatch]);

  return (
  // Routing
    <Container>
      <Routes>
        <Route index element={<Home/>}/>

      </Routes>
    </Container>
  );
}

export default App;

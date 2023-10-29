import PopularDishesMenu from './components/PopularDishesMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Discounts from './containers/Discounts/Discounts.jsx';
import Header from '@/containers/Header/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <PopularDishesMenu />
      <Discounts />
    </>
  );
}

export default App;

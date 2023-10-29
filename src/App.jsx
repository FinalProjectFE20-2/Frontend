import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss"
import Header from '@/containers/Header/Header.jsx';
import PopularDishesMenu from './components/PopularDishesMenu';
import Discounts from './containers/Discounts/Discounts.jsx';

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

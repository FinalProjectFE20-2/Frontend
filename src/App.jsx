import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Discounts from './containers/Discounts/Discounts.jsx';
import PopularDishesMenu from './components/PopularDishesMenu';

function App() {
  return (
    <>
      <PopularDishesMenu />
      <Discounts />
    </>
  );
}

export default App;

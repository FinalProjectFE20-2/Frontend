import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss"
import PopularDishesMenu from './components/PopularDishesMenu';
import Discounts from './containers/Discounts/Discounts.jsx';
import Footer from './containers/Footer/Footer.jsx';

function App() {
  return (
    <>
      <PopularDishesMenu />
      <Discounts />
      <Footer />
    </>
  );
}

export default App;

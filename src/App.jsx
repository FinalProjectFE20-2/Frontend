import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import Header from '@/containers/Header/Header.jsx';
import MainPage from './components/MainPage/MainPage';
import PopularDishesMenu from './components/PopularDishesMenu';
import Discounts from './containers/Discounts/Discounts.jsx';
import Footer from './containers/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <PopularDishesMenu />
      <Discounts />
      <Footer />
    </>
  );
}

export default App;

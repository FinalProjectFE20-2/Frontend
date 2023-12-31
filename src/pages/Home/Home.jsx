import Hero from '../../containers/Hero/Hero.jsx';
import PopularDishesMenu from '../../containers/PopularDishesMenu/PopularDishesMenu.jsx';
import Discounts from '../../containers/Discounts/Discounts.jsx';

const Home = () => (
  <div className="main" data-testid="Home">
    <Hero />
    <PopularDishesMenu />
    <Discounts />
  </div>
);

export default Home;

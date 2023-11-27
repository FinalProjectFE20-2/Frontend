import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './PopularDishesMenu.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/action/cart/cart';

const PopularDishesMenu = props => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products || []);

  const handleAddToCard = obj => {
    dispatch(addToCart(obj));
  };

  const cartItems = useSelector(({ cart }) => cart.items);

  return (
    <section className={`${styles.PopularDishes} container`}>
      <h2 className={styles.title}>Популярні страви</h2>
      <ul className={styles.grid}>
        {products.map(product => (
          <ProductCard
            onClickAddCart={handleAddToCard}
            key={product.itemNo}
            itemNo={product.itemNo}
            addedCount={
              cartItems[product.itemNo] &&
              cartItems[product.itemNo].items.length
            }
          />
        ))}
      </ul>
    </section>
  );
};

export default PopularDishesMenu;

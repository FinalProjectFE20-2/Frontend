import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './PopularDishesMenu.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addProductToCart } from '../../store/action/cart/cart';
import CardSkeleton from '../../components/CardSkeleton/СardSkeleton';
import { useState, useEffect } from 'react';
import { getFilteredProductsFetch } from './../../store/action/product/actionProduct';

const PopularDishesMenu = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products || []);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(state => state.session.token);
  const handleAddToCard = obj => {
    if (token) {
      dispatch(addProductToCart(obj, obj._id));
      return;
    }
    dispatch(addToCart(obj));
  };

  const cartItems = useSelector(({ cart }) => cart.items);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getFilteredProductsFetch(15, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const delay = 1000;
    const fetchDataWithDelay = () => {
      setTimeout(fetchData, delay);
    };
    fetchDataWithDelay();
  }, [setIsLoading]);

  return (
    <section className={`${styles.PopularDishes} container`}>
      <h2 className={styles.title}>Популярні страви</h2>
      <ul className={styles.grid}>
        {isLoading
          ? [...new Array(15)].map((_, index) => <CardSkeleton key={index} />)
          : products.map(product => (
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

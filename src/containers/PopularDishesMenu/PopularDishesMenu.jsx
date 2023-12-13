import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './PopularDishesMenu.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/action/cart/cart';
import CardSkeleton from '../../components/CardSkeleton/СardSkeleton';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const PopularDishesMenu = props => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [item, setItem] = useState([]);
  const products = useSelector(state => state.products.products || []);
  const [isLoading, setIsLoading] = useState(true);
  const handleAddToCard = obj => {
    dispatch(addToCart(obj));
  };

  const cartItems = useSelector(({ cart }) => cart.items);

    useEffect(() => {
      const fetchData = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error('Ошибка при получении продуктов:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [dispatch]);

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

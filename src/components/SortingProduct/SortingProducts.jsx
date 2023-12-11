import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addProductToCart } from '../../store/action/cart/cart.js';
import { handleSorting } from './SortingFunc.js';
import styles from './SortingProducts.module.scss';

export const SortingProducts = ({ products }) => {
  const [selected, setSelected] = useState('default');
  const cartItems = useSelector(({ cart }) => cart.items);
  const dispatch = useDispatch();
  const token = useSelector(state => state.session.token);
  const handleAddToCard = obj => {
    // dispatch(addToCart(obj));
    if (token) {
      dispatch(addProductToCart(obj, obj._id));
      return;
    }
    dispatch(addToCart(obj));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperSelect}>
        <span className={styles.selectTitle}>Сортувати:</span>
        <select
          className={styles.select}
          value={selected}
          onChange={e => setSelected(e.target.value)}>
          <option className={styles.option} value="default">
            Вибрати по ціні
          </option>
          <option value="up">Від меншої ціни</option>
          <option value="down">Від більшої ціни</option>
        </select>
      </div>
      {selected && (
        <ul className={styles.grid}>
          {handleSorting(products, selected).map(item => {
            return (
              <ProductCard
                onClickAddCart={handleAddToCard}
                key={item.itemNo}
                itemNo={item.itemNo}
                propsProduct={item}
                addedCount={
                  cartItems[item.itemNo] && cartItems[item.itemNo].items.length
                }
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default SortingProducts;

import { useLocation } from 'react-router-dom';
import { menuItems } from '@/assets/data.js';
import { useEffect, useState } from 'react';
import styles from './ProductCategories.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { addToCart } from '../../store/action/cart/cart.js';
import { useDispatch } from 'react-redux';
import { getFindObj } from './getFindObj.js';

export const ProductCategories = () => {
  const [objProducts, setObjProducts] = useState({});
  let location = useLocation();
  const dispatch = useDispatch();
  const handleAddToCard = obj => {
    dispatch(addToCart(obj));
  };
  const findObj = getFindObj(menuItems);
  useEffect(() => {
    fetch(
      `https://backend-zeta-sandy.vercel.app/api/products/filter?categories=${findObj.title}`,
    )
      .then(products => {
        return products.json();
      })
      .then(data => {
        setObjProducts(data);
      });
  }, [findObj]);
  return (
    <div className={`container main ${styles.wrapper}`}>
      <h2 className={styles.title}>{findObj?.title}</h2>
      {objProducts.products?.length ? (
        <ul className={styles.grid}>
          {objProducts.products?.map(item => {
            return (
              <ProductCard
                onClickAddCart={handleAddToCard}
                key={item.itemNo}
                itemNo={item.itemNo}
                propsProduct={item}
              />
            );
          })}
        </ul>
      ) : (
        <h2 className={styles.infoBanner}>
          Товари для цієї категорії тимчасово видсутні!
        </h2>
      )}
    </div>
  );
};
export default ProductCategories;

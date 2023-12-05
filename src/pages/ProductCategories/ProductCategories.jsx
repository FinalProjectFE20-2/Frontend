import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ProductCategories.module.scss';
import SortingProducts from '../../components/SortingProduct/SortingProducts.jsx';

export const ProductCategories = () => {
  const [objProducts, setObjProducts] = useState({});
  const [findObj, setfindObj] = useState({});
  let location = useLocation();
  const categoriesId = location.pathname.split('/')[2];

  useEffect(() => {
    fetch(`https://backend-zeta-sandy.vercel.app/api/catalog/${categoriesId}`)
      .then(data => data.json())
      .then(category => {
        setfindObj(category);
        const filterParam =
          `categories=${category.name}`;
        fetch(
          `https://backend-zeta-sandy.vercel.app/api/products/filter?${filterParam}`,
        )
          .then(products => {
            return products.json();
          })
          .then(data => {
            setObjProducts(data);
          });
      })
      .catch(err => {});
  }, [location]);

  return (
    <div className={`container main ${styles.wrapper}`}>
      <h2 className={styles.title}>{findObj?.name}</h2>

            <SortingProducts  />

    </div>
  );
};

export default ProductCategories;

import {useLocation} from 'react-router-dom';
import {menuItems} from '@/assets/data.js';
import {useEffect, useState} from 'react';
import styles from './ProductCategories.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import {addToCart} from '../../store/action/cart/cart.js';
import {useDispatch, useSelector} from 'react-redux';
import {getFindObj} from './getFindObj.js';
import SortingProducts from "../../components/SortingProduct/SortingProducts.jsx";

export const ProductCategories = () => {
    const [objProducts, setObjProducts] = useState({});

    let location = useLocation();


    const findObj = getFindObj(menuItems);
    useEffect(() => {

        const filterParam = location.pathname === '/categories/action' ? "discount=true" : `categories=${findObj.title}`
        fetch(
            `https://backend-zeta-sandy.vercel.app/api/products/filter?${filterParam}`,
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
                    <SortingProducts products={objProducts.products}/>

                ) : (
                <h2 className={styles.infoBanner}>
                Товари для цієї категорії тимчасово видсутні!
                </h2>
                )}
        </div>
    );
};

export default ProductCategories;

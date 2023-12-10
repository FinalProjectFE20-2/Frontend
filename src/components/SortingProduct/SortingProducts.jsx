import {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/action/cart/cart.js";
import styles from "./SortingProducts.module.scss"
import Sorting from '@/components/Sorting/Sorting';
import {useLocation} from 'react-router-dom';

export const SortingProducts = () => {
    const [sortingProducts, setSortingProducts] = useState({})
    const cartItems = useSelector(({cart}) => cart.items);

    const dispatch = useDispatch();
    const location = useLocation();
    const handleAddToCard = obj => {
        dispatch(addToCart(obj));
    };
    const sortPrices = (value) => {
        function cheackPrice(value) {
            return value !== 0 ? 'currentPrice' : 'previousPrice'
        }

        setSortingProducts((prev) => {

            return {
                ...prev, products: [...prev.products?.sort((a, b) => {
                    const sortValueA = cheackPrice(a.currentPrice)
                    const sortValueB = cheackPrice(b.currentPrice)
                    return value === 'ascending'
                        ? a[sortValueA] - b[sortValueB] : b[sortValueB] - a[sortValueA]
                })]
            }

        })
        ;

    }
    const categoriesId = location.pathname.split('/')[2];
    useEffect(() => {
        fetch(`https://backend-zeta-sandy.vercel.app/api/catalog/${categoriesId}`)
            .then(data => data.json())
            .then(category => {
                const filterParam =
                    `categories=${category.name}`;
                fetch(
                    `https://backend-zeta-sandy.vercel.app/api/products/filter?${filterParam}`,
                )
                    .then(products => {
                        return products.json();
                    })
                    .then(data => {

                        setSortingProducts(data);
                    });
            })
            .catch(err => {
            });
    }, [location]);
    return (
        <div className={styles.wrapper}>

            {sortingProducts.products && <><Sorting onSortPrices={sortPrices}/>
                <ul className={styles.grid}>
                    {sortingProducts.products.map(item => {
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
            </>}
        </div>
    )
}
export default SortingProducts;
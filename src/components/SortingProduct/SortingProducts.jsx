import {useEffect} from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/action/cart/cart.js";
import styles from "./SortingProducts.module.scss"
import Sorting from '@/components/Sorting/Sorting';
import {getCategoryById, getIsLoading, getProductsByCategory} from "../../store/selectors/categoriesSelectors.js";
import {fetchProductsByCategory, setProducts} from "../../store/action/categories/actionCategories.js";
import {cheackPrice} from "./SortingFunc.js";
import CardSkeleton from "../CardSkeleton/СardSkeleton.jsx";

export const SortingProducts = () => {

    const dispatch = useDispatch();
    const category = useSelector(getCategoryById);
    const isLoading = useSelector(getIsLoading);
    const cartItems = useSelector(({cart}) => cart.items);
    const filterProductsByCategory = useSelector(getProductsByCategory)
    const handleAddToCard = obj => {
        dispatch(addToCart(obj));
    };
    const sortPrices = (value) => {


        const productsObj = filterProductsByCategory


        const data = {
                ...productsObj, products: [...productsObj.products?.sort((a, b) => {
                    const sortValueA = cheackPrice(a.currentPrice)
                    const sortValueB = cheackPrice(b.currentPrice)
                    return value === 'ascending'
                        ? a[sortValueA] - b[sortValueB] : b[sortValueB] - a[sortValueA]
                })]
            }

        ;
        dispatch(setProducts(data))
    }

    useEffect(() => {
        const filterParam =
            `categories=${category.name}`;
        dispatch(fetchProductsByCategory(filterParam))
    }, [category]);
    return (
        <div className={styles.wrapper}>

            {filterProductsByCategory.products && <><Sorting onSortPrices={sortPrices}/>
                <ul className={styles.grid}>
                    {isLoading
                        ? [...new Array(15)].map((_, index) => <CardSkeleton key={index}/>)
                        : filterProductsByCategory.products.map(item => {
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
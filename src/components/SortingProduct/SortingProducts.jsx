import {useState} from "react";
import styles from "../../pages/ProductCategories/ProductCategories.module.scss";
import ProductCard from "../ProductCard/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/action/cart/cart.js";
import {handleSorting} from "./SortingFunc.js";
import stylesSorting from "./SortingProducts.module.scss"
export const SortingProducts = ({products}) => {
    const [selected, setSelected] = useState('default')
    const cartItems = useSelector(({cart}) => cart.items);
    const dispatch = useDispatch();
    const handleAddToCard = obj => {
        dispatch(addToCart(obj));
    };



    return (
        <div>
            <select className={stylesSorting.select}
                value={selected}
                onChange={e => setSelected(e.target.value)}
            >
                <option value="default">Вибрати по ціні</option>
                <option value="up">Від меншої ціни</option>
                <option value="down">Від більшої ціни</option>
            </select>
            {selected && <ul className={styles.grid}>
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
            </ul>}
        </div>
    )
}
export default SortingProducts;
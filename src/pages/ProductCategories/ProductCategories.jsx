import {useLocation} from 'react-router-dom';
import styles from './ProductCategories.module.scss';
import SortingProducts from '../../components/SortingProduct/SortingProducts.jsx';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategotiesById} from "../../store/action/categories/actionCategories.js";
import {getCategoryById} from "../../store/selectors/categoriesSelectors.js";
import {Suspense, useEffect} from 'react';
export const ProductCategories = () => {
    const findObj = useSelector(getCategoryById);
    let location = useLocation();
    const dispatch = useDispatch();
    const categoriesId = location.pathname.split('/')[2];

    useEffect(() => {
        dispatch(fetchCategotiesById(categoriesId))

    }, [location]);

    return (
        <div className={`container main ${styles.wrapper}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <h2 className={styles.title}>{findObj?.name}</h2>

                <SortingProducts/>
            </Suspense>
        </div>
    );
};

export default ProductCategories;

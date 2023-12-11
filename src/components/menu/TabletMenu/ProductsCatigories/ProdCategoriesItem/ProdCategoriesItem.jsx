import {Link} from 'react-router-dom';
import styles from './ProdCategoriesItem.module.scss';
import {useDispatch} from 'react-redux';
import {setIsOpen} from '../../../../../store/action/categories/actionCategories.js';
import MenuLink from "../../../MenuLink/MenuLink.jsx";

export default function ProdCategoriesItem({item, className, children}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setIsOpen());
    };

    return (
        <li className={styles.item}>
            <MenuLink itemId={item.id} classLink={`${styles.link} ${className}`} click={handleClick}>{children ? (
                children
            ) : (
                <>
                    <div className={styles.imgWrapper}>
                        {item.imgUrl && (
                            <img className={styles.img} src={item.imgUrl} alt={item.name}/>
                        )}
                    </div>
                    <h2 className={styles.title}>{item.name}</h2>
                </>
            )}</MenuLink>

        </li>
    );
}

import styles from './Action.module.scss';
import ProdCategoriesItem from '../ProductsCatigories/ProdCategoriesItem/ProdCategoriesItem.jsx';
export default function Action({obj}) {
    return (
        <ProdCategoriesItem item={obj} className={styles.link}>
            <p className={styles.text}>{obj.name}</p>
        </ProdCategoriesItem>
    );
}

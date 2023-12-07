import Action from '../Action/Action.jsx';
import ProdCategoriesItem from './ProdCategoriesItem/ProdCategoriesItem.jsx';
import styles from './ProductsCatigories.module.scss';
import {useEffect, useState} from "react";

export default function ProductsCatigories() {
    const [categories, setCategories] = useState([]);
    const {withSubmenu, withoutSubmenu,action} = categories.reduce(
        (acc, item) => {
            if (item.name?.toLowerCase() !== 'всі страви') {
                if (!item.parentId) {
                    acc.withSubmenu.push(item);
                } else if (item.parentId==='other') {
                    acc.withoutSubmenu.push(item);
                }
            }
                 else {

                    acc.action = item;
                }
            return acc;
        },
        {withSubmenu: [], withoutSubmenu: [], action: null},
    );
    useEffect(() => {
        fetch(`https://backend-zeta-sandy.vercel.app/api/catalog/`)
            .then(data => data.json())
            .then(category => {
                setCategories(category)
            })
            .catch(err => {
            });
    }, []);
    return (
        <div className={styles.categories}>
            {categories.length > 0 && <>
                <div>
                    <Action obj={action}/>{' '}
                </div>
                <ul className={styles.list}>
                    {withSubmenu.map((item, index) => (
                        <li key={index} className={styles.listItem}>
                            <h2 className={styles.title}>{item.name}</h2>
                            <ul className={styles.submenuList}>
                                {categories.filter(element => element.parentId === item.id).map((subItem, index) => (
                                    <ProdCategoriesItem key={index} item={subItem}/>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li className={`${styles.listItem} ${styles.withoutSubmenu}`}>
                                    <ul>
                                        {withoutSubmenu.map((item, index) => (
                                            <ProdCategoriesItem key={index} item={item}/>
                            ))}
                        </ul>
                    </li>
                </ul>
            </>}
        </div>
    );
}

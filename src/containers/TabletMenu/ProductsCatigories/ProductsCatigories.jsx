import {menuItems} from '@/assets/data.js';
import Action from '../Action/Action.jsx';
import ProdCategoriesItem from './ProdCategoriesItem/ProdCategoriesItem.jsx';
import styles from './ProductsCatigories.module.scss';
import {useEffect, useState} from "react";

export default function ProductsCatigories() {
    const [categories, setCategories] = useState([]);
    const {withSubmenu, withoutSubmenu} = menuItems.reduce(
        (acc, item) => {
            if (item.submenu) {
                acc.withSubmenu.push(item);
            } else if (item.title.toLowerCase() !== 'всі страви') {
                acc.withoutSubmenu.push(item);
            }

            return acc;
        },
        {withSubmenu: [], withoutSubmenu: []},
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
    const action = categories.find((item)=>{
        return item.id==='allProducts'})
    return (
        <div className={styles.categories}>
            {categories.length && <>
            <div>
                <Action obj={action}/>{' '}
            </div>
            <ul className={styles.list}>
                {withSubmenu.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <ul className={styles.submenuList}>
                            {item.submenu.map((subItem, index) => (
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
            </ul> </>}
        </div>
    );
}

import Action from '../Action/Action.jsx';
import ProdCategoriesItem from './ProdCategoriesItem/ProdCategoriesItem.jsx';
import styles from './ProductsCatigories.module.scss';
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getCategories} from "../../../../store/selectors/categoriesSelectors.js";

export default function ProductsCatigories() {
    const categories = useSelector(getCategories)
    const {withoutParentId, otherCategory, allDishes} = categories.reduce(
        (acc, item) => {
            if (item.name?.toLowerCase() !== 'всі страви') {
                if (!item.parentId) {
                    acc.withoutParentId.push(item);
                } else if (item.parentId === 'other') {
                    acc.otherCategory.push(item);
                }
            } else {
                acc.allDishes = item;
            }
            return acc;
        },
        {withoutParentId: [], otherCategory: [], allDishes: null},
    );
    
    return (
        <div className={styles.categories}>
            {categories.length > 0 && <>
                <div>
                    <Action obj={allDishes}/>{' '}
                </div>
                <ul className={styles.list}>
                    {withoutParentId.map((item, index) => {
                        const subItems = categories.filter(element => element.parentId === item.id).map((subItem, index) => (
                            <ProdCategoriesItem key={index} item={subItem}/>
                        ))

                        return (
                            <li key={index} className={styles.listItem}>
                                <h2 className={styles.title}>{item.name}</h2>
                                <ul className={styles.submenuList}>
                                    {subItems}
                                </ul>
                            </li>
                        )
                    })}
                    <li className={`${styles.listItem} ${styles.otherCategory}`}>
                        <ul>
                            {otherCategory.map((item, index) => (
                                <ProdCategoriesItem key={index} item={item}/>
                            ))}
                        </ul>
                    </li>
                </ul>
            </>}
        </div>
    );
}

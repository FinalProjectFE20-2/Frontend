import CategoriesItem from './CategoriesItem/CategoriesItem.jsx';
import styles from './Categories.module.scss';
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getCategories} from "../../../store/selectors/categoriesSelectors.js";

export default function Categories() {
    const categories = useSelector(getCategories)
    const [filterCategories, setFilterCategories] = useState([])
    useEffect(() => {
        setFilterCategories(categories?.filter((element) => {
            return element.parentId === 'other' || !element.parentId
        }))
    }, [categories])

    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                {filterCategories.map((menu, index) => (
                    <CategoriesItem items={menu}  key={index}/>
                ))}
            </ul>
        </nav>
    );
}

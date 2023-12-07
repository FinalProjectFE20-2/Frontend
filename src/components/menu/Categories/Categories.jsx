import CategoriesItem from './CategoriesItem/CategoriesItem.jsx';
import styles from './Categories.module.scss';
import { menuItems } from '@/assets/data.js';
import {useEffect, useState} from "react";

export default function Categories() {
    const [categories, setCategories] = useState([]);
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
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {categories.map((menu, index) => (
          <CategoriesItem items={menu} categories = {categories} key={index} />
        ))}
      </ul>
    </nav>
  );
}

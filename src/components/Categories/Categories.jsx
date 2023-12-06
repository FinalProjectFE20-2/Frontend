import CategoriesItem from './CategoriesItem/CategoriesItem';
import styles from './Categories.module.scss';
import { menuItems } from '@/assets/data.js';
import {useEffect} from "react";

export default function Categories() {
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
        {menuItems.map((menu, index) => (
          <CategoriesItem items={menu} key={index} />
        ))}
      </ul>
    </nav>
  );
}

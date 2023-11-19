import CategoriesItem from './CategoriesItem/CategoriesItem';
import styles from './Categories.module.scss';
import { menuItems } from '@/assets/data.js';

export default function Categories() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {' '}
        {menuItems.map((menu, index) => (
          <CategoriesItem items={menu} key={index} />
        ))}
      </ul>
    </nav>
  );
}

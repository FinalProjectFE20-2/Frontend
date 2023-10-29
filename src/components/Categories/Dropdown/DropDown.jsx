import { Link } from 'react-router-dom';
import styles from './DropDown.module.css';

const Dropdown = ({ submenus, dropdown }) => (
  <ul className={`${styles.dropdown} ${dropdown ? styles.show : ''}`}>
    {submenus.map((submenu, index) => (
      <li key={index} className={styles.menuItems}>
        <Link className={styles.link} to={submenu.url}>
          {submenu.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default Dropdown;

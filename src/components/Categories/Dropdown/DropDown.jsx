import { Link } from 'react-router-dom';
import styles from './DropDown.module.css';
import ResponsiveComponent from '../ResponsiveComponent/ResponsiveComponent.jsx';

const Dropdown = ({ submenus, dropdown }) => (
    <ul className={`${styles.dropdown} ${dropdown ? styles.show : ''}`}>
      {submenus.map((submenu, index) => (
          <ResponsiveComponent className={styles.linkWrapper} submenu={submenu}>
            <li key={index} className={styles.menuItems}>
              <Link className={styles.link} to={submenu.url}>
                {submenu.title}
              </Link>
            </li>
          </ResponsiveComponent>
      ))}
    </ul>
);

export default Dropdown;

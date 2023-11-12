import styles from './DropDown.module.css';
import { Link } from 'react-router-dom';
import ResponsiveComponent from '../ResponsiveComponent/ResponsiveComponent.jsx';

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`${styles.dropdown} ${dropdown ? styles.show : ''}`}>
      {submenus.map((submenu, index) => {
        return (
          <ResponsiveComponent className={styles.linkWrapper} submenu={submenu}>
            <li key={index} className={styles.menuItems}>
              <Link className={styles.link} to={submenu.url}>
                {submenu.title}
              </Link>
            </li>
          </ResponsiveComponent>
        );
      })}
    </ul>
  );
};

export default Dropdown;

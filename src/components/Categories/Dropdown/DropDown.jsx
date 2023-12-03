import styles from './DropDown.module.scss';
import { Link } from 'react-router-dom';
import ResponsiveComponent from '../ResponsiveComponent/ResponsiveComponent.jsx';

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`${styles.dropdown} ${dropdown ? styles.show : ''}`}>
      {submenus.map((submenu, index) => {
        return (
          <ResponsiveComponent
            key={index}
            className={styles.linkWrapper}
            submenu={submenu}>
            <li className={styles.menuItems}>
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

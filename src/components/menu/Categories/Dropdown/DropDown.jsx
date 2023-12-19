import styles from './DropDown.module.scss';
import ResponsiveComponent from '../ResponsiveComponent/ResponsiveComponent.jsx';
import MenuLink from "../../MenuLink/MenuLink.jsx";

const Dropdown = ({submenus, dropdown}) => {

    return (
        <ul className={`${styles.dropdown} ${dropdown ? styles.show : ''}`}>

            {submenus.map((submenu, index) => {
                return (
                    <ResponsiveComponent
                        key={index}
                        className={styles.linkWrapper}
                        submenu={submenu}>
                        <li className={styles.menuItems}>
                            <MenuLink classLink={styles.link} itemId={submenu.id}> {submenu.name}</MenuLink>

                        </li>
                    </ResponsiveComponent>
                );
            })}
        </ul>
    );
};

export default Dropdown;

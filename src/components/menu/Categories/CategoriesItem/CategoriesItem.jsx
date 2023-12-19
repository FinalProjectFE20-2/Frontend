import PropTypes from 'prop-types';
import styles from './CategoriesItem.module.scss';
import {useEffect, useRef, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import Dropdown from '../Dropdown/DropDown.jsx';
import ResponsiveComponent from '../ResponsiveComponent/ResponsiveComponent.jsx';
import Arrow from '@/assets/icons/Arrow.svg?react';
import MenuLink from "../../MenuLink/MenuLink.jsx";
import {useSelector} from "react-redux";
import {getCategories} from "../../../../store/selectors/categoriesSelectors.js";

const CategoriesItem = ({items}) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();
    const isMobile = useMediaQuery({
        query: '(max-width: 468px)',
    });
    const categories = useSelector(getCategories)
    useEffect(() => {
        const handler = event => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {

            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);
    const closeDropdown = () => {

        dropdown && setDropdown(false);
    };

    const isParent = !items.parentId && items.name !== "Всі страви";


    return (
        <li className={styles.menuItems} ref={ref} onClick={closeDropdown}>
            {isParent && (
                <>
                    <button
                        className={styles.button}
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => {
                            setDropdown(prev => !prev);
                        }}>
                        <Arrow className={styles.arrow}/> {items.name}{!isMobile && <Arrow/>}
                    </button>
                    <Dropdown submenus={categories.filter((element) => {
                        return element.parentId === items.id
                    })} dropdown={dropdown}/>
                </>
            )}
            {items.parentId === 'other' && (
                <ResponsiveComponent submenu={items}>
                    <MenuLink classLink={styles.link} itemId={items.id}> {items.name}</MenuLink>
                </ResponsiveComponent>
            )}
        </li>
    );
};

export default CategoriesItem;
CategoriesItem.propTypes = {
    items: PropTypes.shape({
        submenu: PropTypes.array,
        url: PropTypes.string,
    }).isRequired,
};

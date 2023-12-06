import PropTypes from 'prop-types';
import styles from './CategoriesItem.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Dropdown from '../Dropdown/DropDown.jsx';
import ResponsiveComponent from '../ResponsiveComponent/ResponsiveComponent.jsx';
import Arrow from '@/assets/icons/Arrow.svg?react';

const CategoriesItem = ({ items, categories }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const isMobile = useMediaQuery({
    query: '(max-width: 468px)',
  });
  useEffect(() => {
    const handler = event => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);
  const closeDropdown = () => {
    // eslint-disable-next-line no-unused-expressions
    dropdown && setDropdown(false);
  };
  console.log(items)
  const categoriUrl = items.id === 'allProducts' ? items.id :`categories/${items.id}`
  return (
    <li className={styles.menuItems} ref={ref} onClick={closeDropdown}>
      {!items.parentId && items.name!=="Всі страви"  &&  (
        <>
          <button
            className={styles.button}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => {
              setDropdown(prev => !prev);
            }}>
            {isMobile ? (
              <>
                <Arrow className={styles.arrow} /> {items.name}
              </>
            ) : (
              <>
                {items.name} <Arrow />
              </>
            )}
          </button>
          <Dropdown submenus={categories.filter((element)=>{
            return element.parentId===items.id})} dropdown={dropdown} />
        </>
      )}
      {items.parentId === 'other'  && (
          <ResponsiveComponent submenu={items}>
            <Link className={styles.link} to={categoriUrl}>
              {items.name}
            </Link>
          </ResponsiveComponent>
      )}
    </li>
  );
};

export default CategoriesItem;
CategoriesItem.propTypes = {
  items: PropTypes.shape({
    submenu: PropTypes.array,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Dropdown from '../Dropdown/DropDown.jsx';
import styles from './CategoriesItem.module.css';
import Arrow from '@/assets/svg_icon/arrow.svg?react';
import ResponsiveComponent from '../ResponsiveComponent/ResponsiveComponent.jsx';

const CategoriesItem = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const isMobile = useMediaQuery({
    query: '(max-width: 468px)',
  });
  useEffect(() => {
    const handler = (event) => {
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

  return (
    <li className={styles.menuItems} ref={ref} onClick={closeDropdown}>
      {items.submenu ? (
        <>
          <button
            className={styles.button}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}>
            {isMobile ? (
              <>
                <Arrow className={styles.arrow} /> {items.title}
              </>
            ) : (
              <>
                {items.title} <Arrow />
              </>
            )}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <ResponsiveComponent submenu={items}>
          <Link className={styles.link} to={items.url}>
            {items.title}
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

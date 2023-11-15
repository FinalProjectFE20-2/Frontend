import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styles from '../Dropdown/DropDown.module.css';
import ProdCategoriesItem
  from '../../../containers/TabletMenu/ProductsCatigories/ProdCategoriesItem/ProdCategoriesItem.jsx';

export default function ResponsiveComponent({ children, submenu, className }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 468px)',
  });
  return !isMobile ? children : <ProdCategoriesItem className={className} item={submenu}/>;
}

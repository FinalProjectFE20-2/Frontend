import ProdCategoriesItem from '../../../containers/TabletMenu/ProductsCatigories/ProdCategoriesItem/ProdCategoriesItem.jsx';
import { useMediaQuery } from 'react-responsive';

export default function ResponsiveComponent({ children, submenu, className }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 468px)',
  });
  return !isMobile ? (
    children
  ) : (
    <ProdCategoriesItem className={className} item={submenu} />
  );
}

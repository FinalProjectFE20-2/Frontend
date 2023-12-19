

import { useMediaQuery } from "react-responsive";
import ProdCategoriesItem from "../../TabletMenu/ProductsCatigories/ProdCategoriesItem/ProdCategoriesItem.jsx";

export default function ResponsiveComponent({children,submenu,className}){
  const isMobile = useMediaQuery({
    query: "(max-width: 468px)",
  });
  return !isMobile? children : <ProdCategoriesItem  className={className} item={submenu}/>

}
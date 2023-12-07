import {Link} from 'react-router-dom';
 const MenuLink = ({itemId, classLink, children}) => {
    const categoriUrl = itemId === 'allProducts' ? itemId : `categories/${itemId}`;
    return (<Link className={classLink} to={categoriUrl}>
        {children}
    </Link>)
}
export default MenuLink;

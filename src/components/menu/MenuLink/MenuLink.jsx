import {Link} from 'react-router-dom';

const MenuLink = ({
                      itemId, classLink, click = () => {
    }, children
                  }) => {
    const categoriUrl = itemId === 'allProducts' ? itemId : `categories/${itemId}`;
    return (<Link onClick={click} className={classLink} to={categoriUrl}>
        {children}
    </Link>)
}
export default MenuLink;

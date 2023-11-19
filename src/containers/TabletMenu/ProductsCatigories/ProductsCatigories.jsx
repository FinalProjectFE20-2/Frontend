import { menuItems } from '@/assets/data.js';
import Action from '../Action/Action.jsx';
import ProdCategoriesItem from './ProdCategoriesItem/ProdCategoriesItem.jsx';
import styles from './ProductsCatigories.module.scss';

export default function ProductsCatigories() {
  const { withSubmenu, withoutSubmenu, action } = menuItems.reduce(
    (acc, item) => {
      if (item.submenu) {
        acc.withSubmenu.push(item);
      } else if (item.title.toLowerCase() !== 'акції') {
        acc.withoutSubmenu.push(item);
      } else {
        acc.action = item;
      }
      return acc;
    },
    { withSubmenu: [], withoutSubmenu: [], action: null },
  );

  return (
    <div className={styles.categories}>
      <div>
        <Action upPrice={30} downprice={20} obj={action} />{' '}
      </div>
      <ul className={styles.list}>
        {withSubmenu.map((item,index) => (
          <li key={index} className={styles.listItem}>
            <h2 className={styles.title}>{item.title}</h2>
            <ul className={styles.submenuList}>
              {item.submenu.map((subItem,index )=> (
                <ProdCategoriesItem key={index} item={subItem} />
              ))}
            </ul>
          </li>
        ))}
        <li className={`${styles.listItem} ${styles.withoutSubmenu}`}>
          <ul>
            {withoutSubmenu.map((item,index) => (
              <ProdCategoriesItem key={index} item={item} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

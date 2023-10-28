import { menuItems } from '@/assets/data.js';
import Action from '../Action/Action.jsx';
import ProdCategoriesItem from './ProdCategoriesItem/ProdCategoriesItem.jsx';
import styles from './ProductsCatigories.module.css';

export default function ProductsCatigories() {
  // const data = [
  //   {
  //     title: 'Гаряче',
  //     items: [
  //       {
  //         title: 'Гарячі страви',
  //         img: '@/assets/products/17.png',
  //       },
  //
  //       {
  //         title: 'Супи',
  //         img: '@/assets/products/17.png',
  //       },
  //       {
  //         title: 'Хінкалі',
  //         img: '@/assets/products/17.png',
  //       },
  //     ],
  //   },
  // ];

  const withoutSubmenu = [];
  const withSubmenu = [];
  let action;
  menuItems.forEach((item) => {
    if (item.submenu) {
      withSubmenu.push(item);
    } else if (item.title.toLowerCase() !== 'акції') {
      withoutSubmenu.push(item);
    } else {
      action = item;
    }
  });

  return (
    <div className={styles.categories}>
      <div>
        <Action upPrice={30} downprice={20} obj={action} />{' '}
      </div>
      <ul className={styles.list}>
        {withSubmenu.map((item) => (
          <li className={styles.listItem}>
            <h2 className={styles.title}>{item.title}</h2>
            <ul className={styles.submenuList}>
              {item.submenu.map((subItem) => (
                <ProdCategoriesItem item={subItem} />
              ))}
            </ul>
          </li>
        ))}
        <li className={`${styles.listItem} ${styles.withoutSubmenu}`}>
          {withoutSubmenu.map((item) => (
            <ProdCategoriesItem item={item} />
          ))}
        </li>
      </ul>
    </div>
  );
}

// return (
//   <ul className={styles.categories}>
//     {menuItems.map((item) => {
//       if (item.title.toLowerCase() === "акції") {
//         return (
//           <li>
//             <Action upPrice={30} downprice={20} obj={action} />{" "}
//           </li>
//         );
//       }
//       if (item.submenu?.length) {
//         return (
//           <li>
//             <h2>{item.title}</h2>
//             <ul>
//               {item.submenu.map((subItem) => (
//                 <ProdCategoriesItem item={subItem} />
//               ))}
//             </ul>
//           </li>
//         );
//       }
//       return <ProdCategoriesItem item={item} />;
//     })}
//   </ul>
// );

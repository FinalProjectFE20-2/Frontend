import { Link } from 'react-router-dom';
import { menuItems } from '@/assets/data.js';
import Action from '../Action/Action.jsx';
import img from './17.png';
import ProdCategoriesItem from './ProdCategoriesItem/ProdCategoriesItem.jsx';

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

  return (
    <ul style={{ color: 'red' }}>
      {menuItems.map((item) => {
        if (item.title.toLowerCase() === 'акції') {
          return <Action upPrice={30} downprice={20} obj={item} />;
        }
        if (item.submenu?.length) {
          return (
            <li>
              <h2>{item.title}</h2>
              <ul>
                {item.submenu.map((subItem) => (
                  <ProdCategoriesItem item={subItem} />
                ))}
              </ul>
            </li>
          );
        }
        return <ProdCategoriesItem item={item} />;
      })}
    </ul>
  );
}

import { Link } from 'react-router-dom';
import SearchUrl from '@/assets/svg_icon/navigation/Search.svg?react';
import BasketUrl from '@/assets/svg_icon/navigation/Basket.svg?react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const links = [
    { icon: <SearchUrl className={styles.svgIcon} />, link: '/search' },
    { icon: <BasketUrl />, link: '/basket' },
  ];
  return (
    <ul className={styles.list}>
      {links.map(({ link, icon }) => (
        <li key={link} className={styles.item}>
          <Link to={link}>{icon}</Link>
        </li>
      ))}
    </ul>
  );
}

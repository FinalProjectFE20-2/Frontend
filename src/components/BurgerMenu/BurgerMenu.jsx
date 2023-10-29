import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import Burger from '@/assets/svg_icon/burger_menu/burger.svg?react';
import Cross from '@/assets/svg_icon/burger_menu/cross.svg?react';
import TabletMenu from '../../containers/TabletMenu/TabletMenu.jsx';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const isTablet = useMediaQuery({
    query: '(min-width: 468px)',
  });
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={styles.wrapper}>
      <Burger onClick={handleClick} />
      {isTablet ? <h2 className={styles.title}>МЕНЮ</h2> : null}
      {isOpen ? isTablet ? <TabletMenu /> : 'Mobile' : null}
    </div>
  );
}

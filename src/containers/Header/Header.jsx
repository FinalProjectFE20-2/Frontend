import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.scss';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer.jsx';
import Logo from '../../components/Logo/Logo';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Categories from '../../components/Categories/Categories';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu.jsx';

export default function Header() {
  const isDekstop = useMediaQuery({
    query: '(min-width: 1200px)',
  });

  return (
    <header className={`${styles.header} container`}>
      <HeaderContainer classAdd={styles.headerWrapper}>
        <div className={styles.iconWrapper}>
          <Logo />
          {!isDekstop && <BurgerMenu />}
        </div>
        {isDekstop && <Categories />}

        <Navigation></Navigation>
      </HeaderContainer>
      {/* <Header/> */}
    </header>
  );
}

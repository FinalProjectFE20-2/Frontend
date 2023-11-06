import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.css';
import PageContainer from '../../components/PageContainer/PageContainer.jsx';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';

import Navigation from '../Navigation/Navigation';
import Categories from '../../components/Categories/Categories';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu.jsx';

export default function Header() {
  const isDekstop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <header className={styles.header}>
      <PageContainer classAdd={styles.headerWrapper}>
        <div className={styles.iconWrapper}>
          <HeaderLogo />
          {!isDekstop && <BurgerMenu />}
        </div>
        {isDekstop && <Categories />}

        <Navigation></Navigation>
      </PageContainer>
      {/* <Header/> */}
    </header>
  );
}

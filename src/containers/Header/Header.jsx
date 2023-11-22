import styles from './Header.module.scss';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer.jsx';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Search/Search.jsx';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu.jsx';

export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <HeaderContainer classAdd={styles.headerWrapper}>
        <Logo />
        <CategoriesMenu />
        <Navigation />
      </HeaderContainer>
    </header>
  );
}

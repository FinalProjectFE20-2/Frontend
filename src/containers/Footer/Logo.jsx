import { Link } from 'react-router-dom';
import Logo from '@/assets/svg_icon/logo.svg?react';

export default function HeaderLogo() {
  return (
    <Link to={'/'}>
      <Logo />
    </Link>
  );
}

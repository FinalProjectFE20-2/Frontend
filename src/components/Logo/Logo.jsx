import { Link } from 'react-router-dom';
import Icon from '@/assets/svg_icon/logo.svg?react';

export default function Logo() {
  return (
    <Link to={'/'} className='svg'>
      <Icon />
    </Link>
  );
}

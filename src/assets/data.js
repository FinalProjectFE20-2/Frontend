import img17 from '@/assets/products/17.png';
import img19 from '@/assets/products/19.png';
import img21 from '@/assets/products/21.png';
import img25 from '@/assets/products/25.png';
import img26 from '@/assets/products/26.png';
import img27 from '@/assets/products/27.png';
import img28 from '@/assets/products/28.png';

export const menuItems = [
  {
    title: 'Акції',
    url: '/action',
  },
  {
    title: 'Гарячі',
    url: '/hot',
    submenu: [
      {
        title: 'Гарячі страви',
        url: 'hot_dishes',
        img: img17,
      },
      {
        title: 'Супи',
        url: 'soups',
        img: img19,
      },
      {
        title: 'Хінкалі',
        url: 'khinkali',
        img: img21,
      },
    ],
  },
  {
    title: 'Холодні',
    url: '/cold',
    submenu: [
      {
        title: 'Холодні страви',
        url: 'cold_dishes',
        img: img25,
      },
      {
        title: 'Салати',
        url: 'salat',
        img: img28,
      },
      {
        title: 'Соуси',
        url: '/souse',
      },
    ],
  },
  {
    title: 'Свіжа випічка',
    url: '/fresh_pastries',
    img: img26,
  },
  {
    title: 'Десерти',
    url: '/deserts',
    img: img28,
  },
  {
    title: 'Напої',
    url: 'drinks',
    img: img27,
  },
];

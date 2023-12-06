import fire from '@/assets/products/fire.png';
import img17 from '@/assets/products/17.png';
import img19 from '@/assets/products/19.png';
import img21 from '@/assets/products/21.png';
import img25 from '@/assets/products/25.png';
import img27 from '@/assets/products/27.png';
import img28 from '@/assets/products/28.png';
import img29 from '@/assets/products/29.webp';
import img30 from '@/assets/products/30.webp';

export const menuItems = [{
    title: 'Всі страви',
    url: 'allProducts',
    img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701859365/fire_qrnhgz.png',
  },
  {
    title: 'Гарячі',
    url: 'categories/hot',
    submenu: [{
        title: 'Гарячі страви',
        url: 'categories/hot_dishes',
        img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701859365/17_warvpc.png',
      },
      {
        title: 'Перші страви',
        url: 'categories/soups',
        img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701859365/19_pyswvs.png',
      },
      {
        title: 'Хінкалі',
        url: 'categories/khinkali',
        img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701859365/21_appj5x.png',
      },
    ],
  },
  {
    title: 'Холодні',
    url: 'categories/cold',
    submenu: [{
        title: 'Холодні закуски',
        url: 'categories/cold_dishes',
        img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701859366/25_opmrva.png',
      },
      {
        title: 'Салати',
        url: 'categories/salat',
        img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701860252/image_23_ogsyce.png',
      },

    ],
  },
  {
    title: 'Меню мангала',
    url: 'categories/barbecue_menu',
    img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701859365/30_c51lvf.webp',
  },
  {
    title: 'Десерти',
    url: 'categories/deserts',
    img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701859365/28_elaazu.png',
  },
  {
    title: 'Напої',
    url: 'categories/drinks',
    img: 'https://res.cloudinary.com/dk4wwlrws/image/upload/v1701859365/29_x9mvwp.webp',
  },
];

import fire from '@/assets/products/fire.png';
import img17 from '@/assets/products/17.png';
import img19 from '@/assets/products/19.png';
import img21 from '@/assets/products/21.png';
import img25 from '@/assets/products/25.png';
import img27 from '@/assets/products/27.png';
import img28 from '@/assets/products/28.png';

export const menuItems = [
    {
        title: 'Акції',
        url: 'categories/action',
        img: fire,
    },
    {
        title: 'Гарячі',
        url: 'categories/hot',
        submenu: [
            {
                title: 'Гарячі страви',
                url: 'categories/hot_dishes',
                img: img17,
            },
            {
                title: 'Перші страви',
                url: 'categories/soups',
                img: img19,
            },
            {
                title: 'Хінкалі',
                url: 'categories/khinkali',
                img: img21,
            },
        ],
    },
    {
        title: 'Холодні',
        url: 'categories/cold',
        submenu: [
            {
                title: 'Холодні закуски',
                url: 'categories/cold_dishes',
                img: img25,
            },
            {
                title: 'Салати',
                url: 'categories/salat',
                img: img28,
            },

        ],
    },
    {
        title: 'Меню мангала',
        url: 'categories/barbecue_menu',
        img: 'https://api.shashlikyan.ua/uploads/112/564687-f74d0cf8-7c31-47b0-8af6-fa26a88aac08.webp',
    },
    {
        title: 'Десерти',
        url: 'categories/deserts',
        img: img28,
    },
    {
        title: 'Напої',
        url: 'categories/drinks',
        img: 'https://api.shashlikyan.ua/uploads/112/564573-9432d5bf-7f70-4fa2-9840-dbd884fa91d4.webp',
    },
];

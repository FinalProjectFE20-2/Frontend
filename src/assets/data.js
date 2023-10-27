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
          img: '@/assets/products/17.png'
        },
        {
          title: 'Супи',
          url: 'soups',
          img: '@/assets/products/19.png'
        },
        {
          title: 'Хінкалі',
          url: 'khinkali',
          img: '@/assets/products/21.png'
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
          img: '@/assets/products/23.png'
        },
        {
          title: 'Десерти',
          url: 'deserts',

        },
        {
          title: 'Напої',
          url: 'drinks',

        },
      ],
    },
    {
      title: 'Свіжа випічка',
      url: '/fresh_pastries',
      img: '@/assets/products/26.png'
    },
    {
      title: 'Десерти',
      url: '/deserts',
      img: '@/assets/products/28.png'
    },
    {
      title: 'Напої',
      url: '/drinks',
      img: '@/assets/products/27.png'
    },
  ];
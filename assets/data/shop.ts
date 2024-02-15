export const shop = {
    name: 'Wawa',
    rating: '4.5 Excellent',
    ratings: '(120)',
    img: require('@/assets/images/shops/wawa.jpg'), 
    location: '123 Baby Street, Babyville',
    delivery: '30 minutes',
    tags: ["Diapers", "Baby Gear", "Feeding Supplies"],
    about: 'Your one-stop shop for all things baby! From adorable clothing to essential gear, we have everything you need to care for your little one.',
    products: [
      {
        category: 'Clothing',
        items: [
          {
            id: 1,
            name: 'Cute Onesie',
            price: 12.99,
            info: 'Soft cotton onesie with adorable animal prints.',
            img: require('@/assets/images/products/onesie.webp'),
          },
          {
            id: 2,
            name: 'Warm Baby Jumpsuit',
            price: 24.99,
            info: 'Cozy jumpsuit with fleece lining to keep your baby warm in winter.',
            img: require('@/assets/images/products/jumpsuit.webp'),
          },
        ],
      },
      {
        category: 'Toys',
        items: [
          {
            id: 3,
            name: 'Plush Teddy Bear',
            price: 9.99,
            info: 'Super soft teddy bear, perfect for cuddling.',
            img: require('@/assets/images/products/teddy.webp'),
          },
          {
            id: 4,
            name: 'Colorful Rattle Set',
            price: 7.99,
            info: 'Set of 5 brightly colored rattles to stimulate your baby\'s senses.',
            img: require('@/assets/images/products/rattle.webp'),
          },
        ],
      },
      {
        category: 'Feeding Supplies',
        items: [
          {
            id: 5,
            name: 'BPA-Free Baby Bottles',
            price: 19.99,
            info: 'Set of 3 bottles with anti-colic nipples for easy feeding.',
            img: require('@/assets/images/products/bottle.jpg'),
          },
          {
            id: 6,
            name: 'Baby Food Maker',
            price: 49.99,
            info: 'Steam, blend, and puree fresh fruits and veggies for homemade baby food.',
            img: require('@/assets/images/products/foodmaker.jpg'),
          },
        ],
      },
    ],
  };
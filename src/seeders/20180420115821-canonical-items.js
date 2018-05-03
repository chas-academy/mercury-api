'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'CanonicalItems',
    [
      {
        name: 'Apple iPhone 8 32gb',
        icon: 'iphone',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Apple iPhone X 64gb',
        icon: 'smartphone',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Apple Mac Book Pro 13 Touchbar',
        icon: 'macbook',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Lenovo Thinkpad 13',
        icon: 'laptop',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Bose Quiet Comfort 3',
        icon: 'headphone',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Tesla Model X',
        icon: 'car',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Xerjoff Kampuchea Noir 10ml',
        icon: 'bottle',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Tesla Model S',
        icon: 'car',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Apple iMac Pro',
        icon: 'imac',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Apple Homepod White',
        icon: 'speaker',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Kamisori Iwasaki Tamahagane 2CHOGAKE',
        icon: 'knife',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Samsung Galaxy S9',
        icon: 'smartphone',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Moccamaster KBC741 Brushed AO',
        icon: 'cup',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'KitchenAid Artisan Koksmaskin 4,8 L',
        icon: 'cooking',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Nintendo Switch Blue',
        icon: 'handheld',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Xbox One X',
        icon: 'console',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Blue Microphones Yeti Black',
        icon: 'microphone',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Apple Beats Solo3',
        icon: 'headphones',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        name: 'Apple iPad Pro 10.5 256GB Wifi Space Gray',
        icon: 'ipad',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('CanonicalItems', null, {}),
};

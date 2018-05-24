'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      associateWithCategory(
        queryInterface,
        'Apple iPhone 8 32gb',
        'iphone',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Apple iPhone X 64gb',
        'smartphone',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Apple Mac Book Pro 13 Touchbar',
        'macbook',
        2
      ),
      associateWithCategory(
        queryInterface,
        'Lenovo Thinkpad 13',
        'laptop',
        2
      ),
      associateWithCategory(
        queryInterface,
        'Bose Quiet Comfort 3',
        'headphones',
        4
      ),
      associateWithCategory(
        queryInterface,
        'Tesla Model X',
        'car',
        7
      ),
      associateWithCategory(
        queryInterface,
        'Xerjoff Kampuchea Noir 10ml',
        'bottle',
        6
      ),
      associateWithCategory(
        queryInterface,
        'Tesla Model S',
        'car',
        7
      ),
      associateWithCategory(
        queryInterface,
        'Apple iMac Pro',
        'imac',
        2
      ),
      associateWithCategory(
        queryInterface,
        'Apple Homepod White',
        'speaker',
        4
      ),
      associateWithCategory(
        queryInterface,
        'Kamisori Iwasaki Tamahagane 2CHOGAKE',
        'knife',
        6
      ),
      associateWithCategory(
        queryInterface,
        'Samsung Galaxy S9',
        'smartphone',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Moccamaster KBC741 Brushed AO',
        'coffee-maker',
        5
      ),
      associateWithCategory(
        queryInterface,
        'KitchenAid Artisan Koksmaskin 4,8 L',
        'mixer',
        5
      ),
      associateWithCategory(
        queryInterface,
        'Nintendo Switch Blue',
        'handheld',
        3
      ),
      associateWithCategory(
        queryInterface,
        'Xbox One X',
        'console',
        3
      ),
      associateWithCategory(
        queryInterface,
        'Blue Microphones Yeti Black',
        'microphone',
        4
      ),
      associateWithCategory(
        queryInterface,
        'Apple Beats Solo3',
        'headphones',
        4
      ),
      associateWithCategory(
        queryInterface,
        'Apple iPad Pro 10.5 256GB Wifi Space Gray',
        'ipad',
        2
      ),
      associateWithCategory(
        queryInterface,
        'Playstation 4',
        'playstation',
        3
      ),
      associateWithCategory(
        queryInterface,
        'Rymdraket',
        'rocket',
        3
      ),
      associateWithCategory(
        queryInterface,
        'Shiseido Future Solution LX Concentrated Balancing Softener',
        'lotion',
        5
      ),
      associateWithCategory(
        queryInterface,
        'Apple Watch 42inch LTE',
        'applewatch',
        1
      ),
    ]).then(promises => queryInterface.bulkInsert('CanonicalItems', promises, {})),
  //
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('CanonicalItems', null, {}),
};

function associateWithCategory(
  queryInterface,
  name,
  icon,
  categoryId
) {
  return queryInterface
    .rawSelect('Categories', {
      where: {
        categoryId
      }
    }, ['categoryId'])
    .then((categoryId) => {
      const date = new Date();
      console.log('[Associating CanonicalItems] with category', categoryId);

      return {
        name,
        icon,
        categoryId,
        createdAt: date,
        updatedAt: date,
      };
    });
}
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
        1
      ),
      associateWithCategory(
        queryInterface,
        'Lenovo Thinkpad 13',
        'laptop',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Bose Quiet Comfort 3',
        'headphones',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Tesla Model X',
        'car',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Xerjoff Kampuchea Noir 10ml',
        'bottle',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Tesla Model S',
        'car',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Apple iMac Pro',
        'imac',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Apple Homepod White',
        'speaker',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Kamisori Iwasaki Tamahagane 2CHOGAKE',
        'knife',
        1
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
        'cup',
        1
      ),
      associateWithCategory(
        queryInterface,
        'KitchenAid Artisan Koksmaskin 4,8 L',
        'cooking',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Nintendo Switch Blue',
        'handheld',
        2
      ),
      associateWithCategory(
        queryInterface,
        'Xbox One X',
        'console',
        2
      ),
      associateWithCategory(
        queryInterface,
        'Blue Microphones Yeti Black',
        'microphone',
        2
      ),
      associateWithCategory(
        queryInterface,
        'Apple Beats Solo3',
        'headphones',
        1
      ),
      associateWithCategory(
        queryInterface,
        'Apple iPad Pro 10.5 256GB Wifi Space Gray',
        'ipad',
        1
      ),
    ]).then(promises => queryInterface.bulkInsert('CanonicalItems', promises, {})),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('CanonicalItems', null, {}),
};

function associateWithCategory(
  queryInterface,
  name,
  icon,
  categoryId
) {
  return queryInterface
    .rawSelect('Categories', { where: { categoryId } }, ['categoryId'])
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
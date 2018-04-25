'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CanonicalItems', [{
      name: 'Demo item 1',
      icon: 'bicycle',
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    },
    {
      name: 'Demo item 2',
      icon: 'smartphone',
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CanonicalItems', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CanonicalItems', [{
      name: 'Demo item 1',
      icon: 'n/a',
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CanonicalItems', null, {});
  }
};

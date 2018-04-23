'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      goalDelimiter: 42,
      goalType: 'n/a',
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};

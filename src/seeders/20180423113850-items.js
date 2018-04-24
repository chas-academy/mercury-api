'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      goalDelimiter: 42,
      goalType: 'n/a',
      auto: false,
      canonicalId: 1,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    },
    {
      goalDelimiter: 42,
      goalType: 'n/a',
      auto: false,
      canonicalId: 1,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    },
    {
      goalDelimiter: 42,
      goalType: 'n/a',
      auto: false,
      canonicalId: 2,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    },
    {
      goalDelimiter: 42,
      goalType: 'n/a',
      auto: false,
      canonicalId: 2,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    },
    {
      goalDelimiter: 42,
      goalType: 'n/a',
      auto: false,
      canonicalId: 2,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};

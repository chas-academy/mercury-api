'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Categories',
      [
        {
          name: 'Test Category',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Test Category 2',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {},
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {}),
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Categories',
      [
        {
          name: 'Mobil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Datorer och tillbehör',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Spel och film',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ljud, bild och musik',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hem och trädgård',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Skönhet och hälsa',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fordon',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {},
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {}),
};

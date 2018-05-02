'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      associateWithUser(queryInterface, 100, 'Havets botten', 1),
      associateWithUser(queryInterface, 1, 'Bakom dig', 2),
      associateWithUser(queryInterface, 50, 'Stockholm', 3),
      associateWithUser(queryInterface, 12, 'Göteborg', 4),
      associateWithUser(queryInterface, 32, 'Malmö', 5),
      associateWithUser(queryInterface, 33, 'Umeå', 6)
    ])
      .then(promises => {
        return queryInterface.bulkInsert('UserMeta', promises, {})
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserMeta', null, {});
  }
};

function associateWithUser(
  queryInterface,
  age,
  location,
  userId
) {
  return queryInterface
  .rawSelect('Users', {
    where: {userId},
  }, ['userId'])
  .then(canonicalId => {
    const date = new Date();

    console.log('[Associating UserMeta] with user', userId);

    return {
      age,
      location,
      userId,
      createdAt: date,
      updatedAt: date
    }
  })
}
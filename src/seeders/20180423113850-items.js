'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      associateWithCanonical(queryInterface, 10, 1900, 'days of use', 32099, false, false, 1, 2),
      associateWithCanonical(queryInterface, 42, 1800, 'days of use', 20199, false, false, 2, 2),
      associateWithCanonical(queryInterface, 30, 3600, 'days of use', 2499, false, false, 3, 1),
      associateWithCanonical(queryInterface, 42, 4900, 'days of use', 999, false, false, 4, 1),
      associateWithCanonical(queryInterface, 54, 3300, 'days of use', 6589, true, false, 5, 1),
      associateWithCanonical(queryInterface, 1001, 1000, 'days of use', 6589, true, true, 6, 1),
      associateWithCanonical(queryInterface, 500, 1500, 'days of use', 9000, true, false, 7, 1),
    ]).then(promises => queryInterface.bulkInsert('Items', promises, {})),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Items', null, {}),
};

function associateWithCanonical(
  queryInterface,
  delimiter,
  goal,
  goalType,
  price,
  auto,
  completed,
  canonicalId,
  userMetaId,
) {
  return queryInterface
    .rawSelect('CanonicalItems', { where: { canonicalId } }, ['canonicalId'])
    .then((canonicalId) => {
      const date = new Date();

      console.log('[Associating Items]', canonicalId);

      return {
        delimiter,
        goal,
        goalType,
        price,
        auto,
        completed,
        canonicalId,
        userMetaId,
        createdAt: date,
        updatedAt: date,
      };
    });
}

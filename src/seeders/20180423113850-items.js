'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //   return queryInterface.bulkInsert('Items', [{
    //     goalDelimiter: 42,
    //     goalType: 'n/a',
    //     auto: false,
    //     createdAt: new Date().toLocaleString(),
    //     updatedAt: new Date().toLocaleString()
    //   },
    //   {
    //     goalDelimiter: 42,
    //     goalType: 'n/a',
    //     auto: false,
    //     createdAt: new Date().toLocaleString(),
    //     updatedAt: new Date().toLocaleString()
    //   },
    //   {
    //     goalDelimiter: 42,
    //     goalType: 'n/a',
    //     auto: false,
    //     createdAt: new Date().toLocaleString(),
    //     updatedAt: new Date().toLocaleString()
    //   },
    //   {
    //     goalDelimiter: 42,
    //     goalType: 'n/a',
    //     auto: false,
    //     createdAt: new Date().toLocaleString(),
    //     updatedAt: new Date().toLocaleString()
    //   },
    //   {
    //     goalDelimiter: 42,
    //     goalType: 'n/a',
    //     auto: false,
    //     createdAt: new Date().toLocaleString(),
    //     updatedAt: new Date().toLocaleString()
    //   }
    // ])
    return Promise.all([
      associateWithCanonical(queryInterface, 42, 'n/a', false, false, 1),
      associateWithCanonical(queryInterface, 42, 'n/a', false, false, 1),
      associateWithCanonical(queryInterface, 42, 'n/a', false, false, 2),
      associateWithCanonical(queryInterface, 42, 'n/a', false, false, 2),
      associateWithCanonical(queryInterface, 42, 'n/a', false, false, 2)
    ])
      .then(promises => {
        return queryInterface.bulkInsert('Items', promises, {})
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }

};

function associateWithCanonical(
  queryInterface,
  delimiter,
  goalType,
  auto,
  completed,
  canonicalId
) {
  return queryInterface
    .rawSelect('CanonicalItems', {
      where: { canonicalId }
    }, ['canonicalId'])
    .then(canonicalId => {
      const date = new Date();

      console.log('[Associating Items]', canonicalId);

      return {
        delimiter,
        goalType,
        auto,
        completed,
        canonicalId,
        createdAt: date,
        updatedAt: date
      }
    })
}
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
<<<<<<< 63bf1b6dc974b53ff6e8e0b46f9015d16921fe42
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
=======
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
    associateWithCanonical(queryInterface, 10, 50, 'n/a', 32099, false, false, 1),
    associateWithCanonical(queryInterface, 42, 100,'n/a', 20199, false, false, 1),
    associateWithCanonical(queryInterface, 30, 360,'n/a', 2499, false, false, 2),
    associateWithCanonical(queryInterface, 42, 1603,'n/a', 999, false, false, 2),
    associateWithCanonical(queryInterface, 54, 1933,'n/a', 6589, false, false, 2)
  ])
  .then(promises => {
    return queryInterface.bulkInsert('Items', promises, {})
  })
>>>>>>> Update model, seeder, migration for  resource collection with additional attributes
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }

};

<<<<<<< 63bf1b6dc974b53ff6e8e0b46f9015d16921fe42
function associateWithCanonical(
  queryInterface,
  delimiter,
  goalType,
  auto,
  completed,
  canonicalId
) {
=======
function associateWithCanonical(queryInterface, delimiter, goal, goalType, price, auto, completed, canonicalId) {
>>>>>>> Update model, seeder, migration for  resource collection with additional attributes
  return queryInterface
    .rawSelect('CanonicalItems', {
      where: { canonicalId }
    }, ['canonicalId'])
    .then(canonicalId => {
      const date = new Date();

      console.log('[Associating Items]', canonicalId);

<<<<<<< 63bf1b6dc974b53ff6e8e0b46f9015d16921fe42
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
=======
    return {
      delimiter,
      goal,
      goalType,
      price,
      auto,
      completed,
      canonicalId,
      createdAt: date,
      updatedAt: date
    }
  })
>>>>>>> Update model, seeder, migration for  resource collection with additional attributes
}
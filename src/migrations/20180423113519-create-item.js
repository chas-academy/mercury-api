'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Items', {
    itemId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    delimiter: {
      type: Sequelize.INTEGER,
    },
    goal: {
      type: Sequelize.INTEGER,
    },
    goalType: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    auto: {
      type: Sequelize.BOOLEAN,
    },
    completed: {
      type: Sequelize.BOOLEAN,
    },
    canonicalId: {
      type: Sequelize.INTEGER,
    },
    userMetaId: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Items'),
};

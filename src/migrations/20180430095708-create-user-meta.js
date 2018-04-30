'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('UserMeta', {
    userMetaId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    age: {
      type: Sequelize.INTEGER
    },
    location: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('UserMeta');
}
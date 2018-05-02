'use strict';
export default (sequelize, DataTypes) => {
  const UserMeta = sequelize.define('UserMeta', {
    userMetaId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    age: DataTypes.INTEGER,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER
  })

  UserMeta.associate = (models) => {
    UserMeta.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId'
    })

    UserMeta.hasMany(models.Item, {
      as: 'Items',
      foreignKey: 'itemId'
    })
  }

  return UserMeta;
}
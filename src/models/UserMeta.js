'use strict';
export default (sequelize, DataTypes) => {
  const UserMeta = sequelize.define('UserMeta', {
    age: DataTypes.INTEGER,
    location: DataTypes.STRING
  })

  UserMeta.associate = (models) => {
    UserMeta.belongsTo(models.User, {
      as: 'UserMeta',
      foreignKey: 'userMetaId'
    })

    UserMeta.hasMany(models.Item, {
      as: 'Items',
      foreignKey: 'userMetaId'
    })
  }

  return UserMeta;
}
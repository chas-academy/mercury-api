'use strict';
module.exports = (sequelize, DataTypes) => {
  var CanonicalItem = sequelize.define('CanonicalItem', {
    canonicalId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    icon: DataTypes.STRING
  });

  CanonicalItem.associate = (models) => {
    CanonicalItem.hasMany(models.Item, {
      as: 'Items',
      foreignKey: 'itemId'
    })
  }

  return CanonicalItem;
};
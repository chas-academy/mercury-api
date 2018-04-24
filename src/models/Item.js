'use strict';

module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    goalDelimiter: DataTypes.INTEGER,
    goalType: DataTypes.STRING,
    auto: DataTypes.BOOLEAN,
    canonicalId: DataTypes.INTEGER
  });

  Item.associate = (models) => {
    Item.belongsTo(models.CanonicalItem, {
      as: 'CanonicalItem',
      foreignKey: 'canonicalId'
    })
  }

  return Item;
};
'use strict';

export default (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    delimiter: DataTypes.INTEGER,
    goalType: DataTypes.STRING,
    auto: DataTypes.BOOLEAN,
    completed: DataTypes.BOOLEAN,
    canonicalId: DataTypes.INTEGER
  });

  Item.associate = (models) => {
    Item.belongsTo(models.CanonicalItem, {
      as: 'CanonicalItem',
      foreignKey: 'canonicalId'
    });

    Item.belongsTo(models.UserMeta, {
      as: 'UserMeta',
      foreignKey: 'userMetaId'
    });
  };

  return Item;
}
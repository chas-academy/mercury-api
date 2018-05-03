'use strict';

export default (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    delimiter: DataTypes.INTEGER,
    goal: DataTypes.INTEGER,
    goalType: DataTypes.STRING,
    price: DataTypes.INTEGER,
    auto: DataTypes.BOOLEAN,
    completed: DataTypes.BOOLEAN,
    canonicalId: DataTypes.INTEGER,
    userMetaId: DataTypes.INTEGER,
  });

  Item.associate = (models) => {
    Item.belongsTo(models.CanonicalItem, {
      as: 'CanonicalItem',
      foreignKey: 'canonicalId',
    });

    Item.belongsTo(models.UserMeta, {
      as: 'UserMeta',
      foreignKey: 'userMetaId',
    });
  };

  Item.prototype.getName = () => [this.canonicalId];

  return Item;
};

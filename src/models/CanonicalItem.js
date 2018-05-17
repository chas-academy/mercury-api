'use strict';

export default (sequelize, DataTypes) => {
  const CanonicalItem = sequelize.define('CanonicalItem', {
    canonicalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  });

  CanonicalItem.associate = (models) => {
    CanonicalItem.hasMany(models.Item, {
      as: 'Items',
      foreignKey: 'itemId',
    });
  };

  CanonicalItem.associate = (models) => {
    CanonicalItem.belongsTo(models.Category, {
      as: 'Category',
      foreignKey: 'categoryId',
    });
  };

  return CanonicalItem;
};

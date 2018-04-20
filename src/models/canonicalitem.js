'use strict';
module.exports = (sequelize, DataTypes) => {
  var CanonicalItem = sequelize.define('CanonicalItem', {
    name: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {});
  CanonicalItem.associate = function(models) {
    // associations can be defined here
  };
  return CanonicalItem;
};
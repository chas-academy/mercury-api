'use strict'

export default (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    });

    Category.associate = (models) => {
        Category.hasMany(models.CanonicalItem, {
            as: 'CanonicalItems',
            foreignKey: 'canonicalId',
        });
    };

    return Category;
};
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubContractor extends Model {
    static associate(models) {
      SubContractor.belongsTo(models.User, { foreignKey: 'userId' });
      SubContractor.hasMany(models.Application, { foreignKey: 'subcontractorId' });
    }
  }
  SubContractor.init({
    userId: DataTypes.INTEGER,
    skills: DataTypes.STRING,
    certifications: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SubContractor',
  });
  return SubContractor;
};

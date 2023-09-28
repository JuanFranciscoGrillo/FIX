'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contractor extends Model {
    static associate(models) {
      Contractor.belongsTo(models.User, { foreignKey: 'userId' });
      Contractor.hasMany(models.JobListing, { foreignKey: 'contractorId' });
    }
  }
  Contractor.init({
    userId: DataTypes.INTEGER,
    company_name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contractor',
  });
  return Contractor;
};

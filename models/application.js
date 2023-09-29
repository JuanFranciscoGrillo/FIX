'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate(models) {
      Application.belongsTo(models.JobListing, { foreignKey: 'jobId' });
      Application.belongsTo(models.SubContractor, { foreignKey: 'subcontractorId' });
    }
  }
  Application.init({
    jobId: DataTypes.INTEGER,
    subcontractorId: DataTypes.INTEGER,
    application_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobListing.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    requiredSkills: DataTypes.STRING,
    deadline: DataTypes.DATE,
    contractorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobListing',
  });
  return JobListing;
};
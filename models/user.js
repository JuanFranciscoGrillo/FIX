'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Contractor, { foreignKey: 'userId' });
      User.hasOne(models.SubContractor, { foreignKey: 'userId' });
      User.hasMany(models.Message, { as: 'SentMessages', foreignKey: 'senderId' });
      User.hasMany(models.Message, { as: 'ReceivedMessages', foreignKey: 'receiverId' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    contact_info: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

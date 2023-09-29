'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, { as: 'Sender', foreignKey: 'senderId' });
      Message.belongsTo(models.User, { as: 'Receiver', foreignKey: 'receiverId' });
    }
  }
  Message.init({
    senderId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER,
    message_content: DataTypes.TEXT,
    timestamp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};

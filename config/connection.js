require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
  DB_USERNAME: username,
  DB_PASSWORD: password,
  DB_DATABASE: database,
  DB_HOST: host,
  DB_DIALECT: dialect,
} = process.env;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: false,
  define: {
    timestamps: true,
    freezeTableName: true,
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;

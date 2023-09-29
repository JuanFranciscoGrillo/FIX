const express = require('express');
const sequelize = require('./models').sequelize;
const apiRoutes = require('./controllers/api');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// API Routes
app.use('/api', apiRoutes);

// Syncing sequelize models and then starting our Express app
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnector = {}

dbConnector.connectetAllRoutes = (database) => {
  const DBUser = process.env.DB_USER;
  const DBPassword = process.env.DB_PASSWORD;
  const DBHost = process.env.DB_HOST;
  const DBPort = process.env.DB_PORT;
  const DB = database || process.env.DB;

  // mongoose.connect('mongodb://username:password@host:port/database?options...');
  mongoose.connect(`mongodb://${DBUser}:${DBPassword}@${DBHost}:${DBPort}/${DB}`, (err) => {
    if (err) { console.log(err); return}
    console.log("Database connection established");
  });
}
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env file and creating the server
const server = express();
dotenv.config();

// Load configuration
const PORT = process.env.PORT || 3000;
const ROUTES_PATH = path.join(__dirname, `routes`);

// Add middleware to parse the body of the request
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Loading custom modules
const getAllRoutes = require('./assets/utils/getAllRoutes');

// setting allowed headers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS);
  res.header('Access-Control-Allow-Headers', process.env.ALLOWED_HEADERS);
  res.header('Access-Control-Allow-Methods', process.env.ALLOWED_METHODS_X);

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', process.env.ALLOWED_METHODS);
    return res.status(200).json({});
  }

  next();
});

const apiRoutes = getAllRoutes(ROUTES_PATH);
const apiRouteKeys = Object.keys(apiRoutes)
apiRouteKeys.forEach(key => {
  const subRoutes = apiRoutes[key];
  subRoutes.forEach(route => {
    const routePath = path.join(ROUTES_PATH, key, route);
    const routeName = `${key}`;
    const routeHandler = require(routePath);
    server.use(`/${routeName}`, routeHandler);
  })
});

server.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      status: (error.status || 500)
    }
  });
});

server.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
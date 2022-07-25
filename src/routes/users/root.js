const express = require('express');
const path = require('path');
const fs = require('fs');

// Importing router
const router = express.Router();

// get all sub routes of the users route
function getAllSubRoutes(ROUTES_PATH) {
  const usersRoutes = fs.readdirSync(ROUTES_PATH);
  const usersSubRoutes = usersRoutes.map(route => route.replace('.js', ''));
  return usersSubRoutes;
}

// Create the root product route
router.get("/", (req, res) => {
  res.status(200).json({
    message: "With the help of this route you can interact with the users API",
    routes: getAllSubRoutes(__dirname)
  });
});

console.log("Route: users/root.js loaded successfully!");

module.exports = router;
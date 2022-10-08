const express = require('express');
const fs = require('fs');

// Importing router
const router = express.Router();

// Import custom modules
const DBCommit = require('../../assets/database/dbCommit.js');

// get all sub routes of the users route
function getAllSubRoutes(ROUTES_PATH) {
  const usersRoutes = fs.readdirSync(ROUTES_PATH);
  const usersSubRoutes = usersRoutes.map(route => route.replace('.js', ''));
  return usersSubRoutes;
}

// Create the root product route
router.post("/test", async (req, res) => {
  const dbCommit = new DBCommit();
  let result = await dbCommit.createUser({
    username: "test",
    password: "test",
    email: "services@vorberg-webmail.de",
    created: Date.now()
  });

  // check if the result returns an error
  if (result.code) {
    res.send({
      status: false,
      message: result.errmsg,
      timestamp: Date.now()
    });
  } else {
    res.send({
      status: true,
      message: "User created",
      result: result,
      timestamp: Date.now()
    });
  }
});

console.log("Route: users/test.js loaded successfully!");

module.exports = router;
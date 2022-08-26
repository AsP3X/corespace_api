const express = require('express');

// Importing router
const router = express.Router();

// Importing custom routes
// const DBCommit = require('../../assets/database/dbCommit.js');

// Create the root product route
router.get("/test", (req, res) => {
  const { authToken } = req.body;

  if (!authToken) {
    res.status(500).json('AuthToken invalid, interaction denied');
  }

  // const dbcommit = new DBCommit("testing", authToken);
  // const auth = dbcommit.auth();
  // res.status(200).json({ status: 200, message: "authToken valid" });
});

console.log("Route: users/test.js loaded successfully!");

module.exports = router;
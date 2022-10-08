const express = require('express');
const path = require('path');
const fs = require('fs');

// Importing router
const router = express.Router();

// Import custom modules
const DBCommit = require('../../assets/database/dbCommit.js');
const dataFilter = require('../../assets/utils/dataFilter.js');

// Create the root product route
router.get("/all", (req, res) => {

  let dbCommit = new DBCommit();

  dbCommit.getAllUsers().then(result => {
    userData = dataFilter.userData(result, "default");
    res.send(userData);
  }).catch(err => {
    res.send(err);
  });

});

console.log("Route: users/all.js loaded successfully!");

module.exports = router;
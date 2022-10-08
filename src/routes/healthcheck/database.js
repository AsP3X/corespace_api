const express = require('express');
const path = require('path');
const fs = require('fs');

// Importing router
const router = express.Router();

// Create the database product route
router.get("/database", (req, res) => {
  res.status(200).json({
    healthy: true,
    message: "Database is healthy"
  });
});

console.log("Route: healthcheck/database.js loaded successfully!");

module.exports = router;
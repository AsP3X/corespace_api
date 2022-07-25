const express = require('express');
const path = require('path');
const fs = require('fs');

// Importing router
const router = express.Router();

// Create the root product route
router.get("/", (req, res) => {
  res.status(200).json({
    healthy: true,
    uptime: process.uptime()
  });
});

console.log("Route: healthcheck/root.js loaded successfully!");

module.exports = router;
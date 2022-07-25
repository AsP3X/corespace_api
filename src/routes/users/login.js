const express = require('express');
const path = require('path');
const fs = require('fs');

// Importing router
const router = express.Router();

// Import custom modules
const validator = require('../../assets/validation/validateUserData');

// Create the root product route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) { res.sendStatus(400); return; }
  if (validator.validateEmail(email)) { res.sendStatus(400); return; }
  res.send({
    success: true,
    message: "Login successful!",
    timeStamp: new Date().getTime()
  });

});

console.log("Route: users/login.js loaded successfully!");

module.exports = router;
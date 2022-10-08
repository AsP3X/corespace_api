const express = require('express');
const path = require('path');
const fs = require('fs');

// Importing router
const router = express.Router();

// Import custom modules
const validator = require('../../assets/validation/validateUserData');
const dbCommit = require('../../assets/database/dbCommit');
const crypter = require('../../assets/utils/crypter');

// Create the root product route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) { res.sendStatus(403); return; }
  if (validator.validateEmail(email)) { res.sendStatus(403); return; }

  const db = new dbCommit();
  const userData = await db.getUserData(email);

  if (userData && crypter.compare(password, userData.password)) {
    res.send({
      status: true,
      message: "Login successful",
      timestamp: Date.now()
    });
  } else {
    res.send({
      status: false,
      message: "Login failed invalid credentials",
      timestamp: Date.now()
    });
  }
});

console.log("Route: users/login.js loaded successfully!");

module.exports = router;
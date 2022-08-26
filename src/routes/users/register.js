const express = require('express');
const path = require('path');
const fs = require('fs');
const { Server } = require('http');

// Importing router
const router = express.Router();

// Import custom modules
const validator = require('../../assets/validation/validateUserData.js');

// Check the validation results of the user data and returning a json response
function validation(userdata) {
  const usernameResult = validator.validateUsername(userdata.username);
  const passwordResult = validator.validatePassword(userdata.password);
  const emailResult = validator.validateEmail(userdata.email);

  if (usernameResult) {
    return {
      status: false,
      message: `${usernameResult}`
    };
  }

  if (emailResult) {
    return {
      status: false,
      message: `${emailResult}`
    };
  }

  if (passwordResult) {
    return {
      status: false,
      message: `${passwordResult}`
    };
  }

  return {
    status: true,
    message: 'User data is valid'
  };
}

function registerUser(username, email, password) {
}

// Registration route handler
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const userDataObj = {
    username,
    email,
    password
  }

  const validationResult = validation(userDataObj);

  if (validationResult.status) {
    res.status(200).json({
      message: "User registered successfully"
    });
  } else {
    res.status(400).json({
      message: "User registration failed",
      reason: validationResult.message
    });
  }
});

console.log("Route: users/register.js loaded successfully!");

module.exports = router;
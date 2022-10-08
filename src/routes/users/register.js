const express = require('express');
const fs = require('fs');

// Importing router
const router = express.Router();

// Import custom modules
const validator = require('../../assets/validation/validateUserData.js');
const crypter = require('../../assets/utils/crypter.js');
const DBCommit = require('../../assets/database/dbCommit.js');
const dataFilter = require('../../assets/utils/dataFilter.js');

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

async function registerUser(res, username, email, password) {
  const dbCommit = new DBCommit();
  let result = await dbCommit.createUser({
    username: username,
    password: crypter.encrypt(password),
    email: email,
    created: Date.now()
  });

  // check if the result returns an error
  if (result.code) {
    res.send({
      status: false,
      message: "Registration failed",
      timestamp: Date.now()
    });
  } else {
    res.send({
      status: true,
      message: "User created",
      result: dataFilter.personalData(result, "default"),
      timestamp: Date.now()
    });
  }
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
    result = registerUser(res, username, email, password);
  } else {
    res.status(400).json({
      message: "User registration failed",
      reason: validationResult.message
    });
  }
});

console.log("Route: users/register.js loaded successfully!");

module.exports = router;
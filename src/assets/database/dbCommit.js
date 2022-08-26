const mongoose = require('mongoose');

// Import models
const AuthToken = require('../../models/authToken.js');

class DBCommit {
  isValidated = false;

  constructor(database, authToken) {
    this.database = database;
    this.authToken = authToken;
  }

  auth() {

    AuthToken.findOne({ authToken: this.authToken }).exec()
      .then(authToken => {
        
      }).catch(err => {

      });

    if (this.authToken = "ifu9nz4w8") return true
    return false;
  }

}

module.exports = DBCommit;
const mongoose = require('mongoose');

// Import models
const AuthToken = require('../../models/authToken.js');
const Users = require('../../models/users.js');

class DBCommit {

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

  createUser(userObj) {
    const username = userObj.username;
    const password = userObj.password;
    const email = userObj.email;
  }

}

module.exports = DBCommit;
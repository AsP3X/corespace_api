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

    let user = new Users({
      _id: new mongoose.Types.ObjectId(),
      username: username,
      password: password,
      email: email,
      created: Date.now()
    });

    return user.save().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
  }

  getUserData(email) {
    return Users.findOne({ email: email }).exec().then(result => {
      if (!result) return false;
      return result;
    }).catch(err => {
      return false;
    });
  }

  getAllUsers() {
    return Users.find().exec().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
  }

}

module.exports = DBCommit;
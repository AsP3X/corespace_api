const bcrypt = require('bcrypt');

const crypter = {};

/**
 * Encrypting the password with bcrypt and a salt of 11
 * @param {String} password 
 * @returns {String} hash
 */
crypter.encrypt = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(11), null);
}

/**
 * Checking if the password is matching the given hash
 * @param {String} password 
 * @param {String} hash 
 * @returns 
 */
crypter.compare = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

crypter.generateRandomHash = () => {
  return bcrypt.hashSync(Math.random().toString(), bcrypt.genSaltSync(11), null);
}

crypter.generateLoginToken = (username) => {
  username = username.toLowerCase();
  const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var preToken = "";

  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 32; i++)
    preToken += possible.charAt(Math.floor(Math.random() * 32));

  // mix the username and the date together in a random order
  var mixed = username + date + preToken;
  var mixedArray = mixed.split('');
  mixedArray.sort(function () { return 0.5 - Math.random() });

  var token = mixedArray.join('');
  token = token.replace(/\s/g, '');
  return token;
}

module.exports = crypter;
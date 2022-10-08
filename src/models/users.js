const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  created: { type: Date, default: Date.now },
  lastLogin: { type: Date}
});

module.exports = mongoose.model('Users', userSchema);
const mongoose = require('mongoose');

const authTokenSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  authToken: { type: String, required: true }
});

module.exports = mongoose.model('authToken', authTokenSchema);
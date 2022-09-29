const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;

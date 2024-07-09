const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  contact: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
});

module.exports = mongoose.model('User', UserSchema);

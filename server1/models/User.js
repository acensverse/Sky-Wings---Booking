const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  number: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

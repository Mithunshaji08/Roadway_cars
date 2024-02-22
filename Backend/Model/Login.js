// models/Login.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'lender'],
    default: 'user',
  },
});

const User = mongoose.model('Login', userSchema);

module.exports = Login;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  userName: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema);
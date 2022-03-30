const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  commentAuthorName: {
    type: String
  },
  commentContent: {
    type: String
  },
  commentDate: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('Comment', CommentSchema);
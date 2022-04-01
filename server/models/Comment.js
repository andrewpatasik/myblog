const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  commentPostParent: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
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
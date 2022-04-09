const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const PostSchema = new Schema({
  postAuthor: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postTitle: {
    type: String
  },
  postDate: {
    type: Date,
    default: new Date()
  },
  postPublishedStatus: {
    type: Boolean,
    required: true
  },
  postContentPreview: {
    type: String
  },
  postContent: {
    type: String
  },
})

PostSchema.virtual('apiUrl').get(function () {
  return `/api/posts/${this._id}`;
})
PostSchema.virtual('editorUrl').get(function () {
  return `/editor/posts/${this._id}`;
})
PostSchema.virtual('date').get(function () {
  return moment(this.postDate).fromNow();
})

module.exports = mongoose.model('Post', PostSchema);
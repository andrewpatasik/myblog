const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

// PostSchema.virtual('url').get(function () {
//   return `/api/posts/${this._id}`;
// })

module.exports = mongoose.model('Post', PostSchema);
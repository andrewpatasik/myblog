const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublishedSchema = new Schema({
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  publishedAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('Published', PublishedSchema);

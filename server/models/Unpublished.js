const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnpublishedSchema = new Schema({
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
})

module.exports = mongoose.model('Unpublished', UnpublishedSchema);


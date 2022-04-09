const Post = require('../models/Post');

exports.editor_get = (req, res) => {
  const postId = req.params.postId;

  Post.findById(
    postId,
    "postAuthor postTitle postDate postPublishedStatus postContentPreview postContent",
    (err, post) => {
      if (err) return next(err);
      res.render('editor', {
        title: 'myblog - editor',
        user: req.user,
        data: post
      })
    })
}
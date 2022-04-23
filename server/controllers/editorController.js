const Post = require('../models/Post');

exports.editor_create_get = (req, res) => {
  res.render('editor', {
    title: 'myblog - editor',
    user: req.user,
    data: "",
    apiUrl: '/api/posts'
  })
}

exports.editor_editpost_get = (req, res) => {
  const postId = req.params.postId;

  Post.findById(
    postId,
    "postTitle postPublishedStatus postContent",
    (err, data) => {
      if (err) return next(err);

      res.render('editor', {
        title: 'myblog - editor',
        user: req.user,
        data,
        apiUrl: data.apiUrl
      })
    })
}
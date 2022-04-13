const Post = require('../models/Post');

exports.editor_create_get = (req, res) => {
  res.render('editor', {
    title: 'myblog - editor',
    user: req.user,
    data: "",
    postUrl: '/api/posts',
    postAction: 'POST'
  })
}

exports.editor_editpost_get = (req, res) => {
  const postId = req.params.postId;

  Post.findById(
    postId,
    "postTitle postPublishedStatus postContent",
    (err, foundPost) => {
      if (err) return next(err);

      let { _id, postPublishedStatus, postTitle, postContent } = foundPost;

      res.render('editor', {
        title: 'myblog - editor',
        user: req.user,
        data: { 
          _id,
          postPublishedStatus,
          postTitle,
          postContent: JSON.parse(foundPost.postContent),
        },
        postUrl: `/api/posts/${postId}`,
        postAction: 'PUT'
      })
    })
}
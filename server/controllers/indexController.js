const Post = require('../models/Post');

exports.index_get = (req, res) => {
  Post.find({}, (err, allPosts) => {
    if (err) return err;

    res.render('index', {
      title: "myblog - Home",
      user: req.user,
      postPayload: allPosts
    });
  })
}
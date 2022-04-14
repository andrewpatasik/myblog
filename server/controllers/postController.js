const async = require('async');

const Post = require('../models/Post');
const Comment = require('../models/Comment');

// PROTECTED ROUTES
exports.posts_get = (req, res, next) => {
  Post.find({},
    "postAuthor postTitle postDate postPublishedStatus postContentPreview postContent",
    (err, allPosts) => {
      if (err) return next(err);
      res.send(allPosts)
    })
}

// PROTECTED ROUTES
exports.posts_post = (req, res, next) => {
  const payload = Object.assign(req.body);
  const post = new Post({
    postAuthor: req.user._id,
    postTitle: payload.postTitle,
    postDate: new Date(),
    postPublishedStatus: payload.postPublishedStatus,
    postContentPreview: payload.postContentPreview,
    postContent: JSON.stringify(payload.postContent)
  }) 

  post.save((err) => {
    if (err) return next(err);

    res.status(200).json({ 'message': 'post created' })
  })

}

// PROTECTED ROUTES FOR UNPUBLISHED POST
exports.post_get = (req, res, next) => {
  const postId = req.params.postId;

  Post.findById(
    postId,
    "postAuthor postTitle postDate postPublishedStatus postContentPreview postContent",
    (err, post) => {
      if (err) return next(err);
      res.send(post)
    })
};

exports.post_edit = (req, res, next) => {
  const postId = req.params.postId;
  const payload = Object.assign(req.body);

  console.log(payload);

  async.waterfall([
    function(callback) {
      Post.findById(postId, (err, foundPost) => {
        if (err) callback(err, null);

        callback(null, foundPost)
      })
    },
    function(foundPostPayload, callback) {
      foundPostPayload.postTitle = payload.postTitle;
      foundPostPayload.postContentPreview = payload.postContentPreview;
      foundPostPayload.postContent = JSON.stringify(payload.postContent);
      foundPostPayload.postPublishedStatus = payload.postPublishedStatus;
      foundPostPayload.postDate = new Date(); 
      
      foundPostPayload.save((err) => {
        if (err) callback(err, null);

        callback(null, foundPostPayload)
      })
    }
  ], function (err, result) {
    if (err) return next(err);

    res.json(result);
  }) 
}

exports.post_delete = (req, res, next) => {
  const postId = req.params.postId;
  Post.findByIdAndRemove(postId, (err) => {
    if (err) return next(err);

    res.json({ message: postId + 'deleted.' });
  })
}

exports.comments_get = (req, res, next) => {
  const postId = req.params.postId;

  Comment.find({
    commentPostParent: postId
  }, (err, allComments) => {
    if (err) return next(err);
    res.send(allComments)
  })
}

exports.comment_get = (req, res, next) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;

  Comment.find({
    commentPostParent: postId,
    _id: commentId
  }, (err, comment) => {
    if (err) return next(err);
    res.send(comment)
  })
}

exports.published_get = (req, res, next) => {
  Post.find({
      postPublishedStatus: true
    },
    "postAuthor postTitle postDate postPublishedStatus postContentPreview postContent",
    (err, allPosts) => {
      if (err) return next(err);
      res.send(allPosts)
    })
}

exports.unpublished_get = (req, res, next) => {
  if (!req.user) {
    res.status(403).send({
      message: 'not authorized.'
    })
    return;
  }

  Post.find({
      postPublishedStatus: false
    },
    "postAuthor postTitle postDate postPublishedStatus postContentPreview postContent",
    (err, allPosts) => {
      if (err) return next(err);
      res.send(allPosts)
    })
}
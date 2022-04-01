const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
  res.send({ message: 'NOT IMPLEMENTED'})
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
  // const authHeader = req.headers["authorization"];
  // const token = authHeader.split(' ')[1];
  
  // jwt.verify(token, "jsonwebtoken", (err, decode) => {
  //   if (err) {
  //     return next(err)
  //   }
  //   res.send({ message: decode })
  // })

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
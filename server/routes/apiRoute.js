const express = require('express');
const passport = require('passport');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', (req, res) => res.send({ message: '/api'}));

router.get('/posts', postController.posts_get);
router.post('/posts', postController.posts_post);

router.get('/posts/published', postController.published_get);

router.get('/posts/unpublished', passport.authenticate('jwt', { session: false }), postController.unpublished_get);

router.get('/posts/:postId', postController.post_get);

router.get('/posts/:postId/comments', postController.comments_get);

router.get('/posts/:postId/comments/:commentId', postController.comment_get);

module.exports = router;
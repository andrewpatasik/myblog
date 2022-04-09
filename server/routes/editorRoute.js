const express = require('express');
const router = express.Router();
const passport = require('passport');

const editorController = require('../controllers/editorController');

router.get('/posts/:postId', passport.authenticate('jwt', {
  session: false,
  failureRedirect: '/auth/login'
}), editorController.editor_get);

module.exports = router;
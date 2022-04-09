const express = require('express');
const router = express.Router();
const passport = require('passport');

const editorController = require('../controllers/editorController');

router.get('/posts/create', editorController.editor_create_get);

router.get('/posts/:postId', editorController.editor_editpost_get);

module.exports = router;
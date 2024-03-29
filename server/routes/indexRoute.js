const express = require('express');
const passport = require('passport');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', passport.authenticate('jwt', {
  session: false,
  failureRedirect: '/auth/login'
}), indexController.index_get);

module.exports = router;
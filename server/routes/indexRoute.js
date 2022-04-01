const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false, failureRedirect: '/auth/login' }), (req, res) => {
  res.render('index');
});

module.exports = router;

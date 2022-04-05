const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false, failureRedirect: '/auth/login' }), (req, res) => {
    res.render('index', {
      title: "myblog - Home"
    });
  });

module.exports = router;
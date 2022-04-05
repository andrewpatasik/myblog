const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login_get = (req, res, next) => {
  res.render('login', {
    title: "myblog - Admin Login Page"
  });
}

exports.login_post = (req, res, next) => {
  // const mockUser = {
  //   username: 'andrewpatasik',
  //   password: 'AlphayorK93'
  // }

  const user = {
    username: req.body.username,
    password: req.body.password
  }

  User.findOne({
    username: user.username
  }, (err, foundUser) => {
    if (err) {
      return next(err)
    }

    if (foundUser) {
      bcrypt.compare(user.password, foundUser.password)
        .then(isMatched => {
          if (isMatched === true) {
            jwt.sign(user, 'jsonwebtoken', (err, token) => {
              if (err) {
                console.log(err);
                return
              }
              res.cookie('jwt', token, {
                httpOnly: true,
                secure: false
              }).status(200).redirect('/')
            })
          } else {
            res.status(403).send({
              message: 'password incorrect'
            })
          }
        })
    } else {
      res.status(403).send({
        message: 'username incorrect'
      })
    }
  })
}
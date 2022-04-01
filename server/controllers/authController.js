const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login_get = (req, res, next) => {
  res.render('login');
}

exports.login_post = (req, res, next) => {
  const mockUser = {
    username: 'andrewpatasik',
    password: 'AlphayorK93'
  }

  User.findOne({
    username: mockUser.username
  }, (err, foundUser) => {
    if (err) {
      return next(err)
    }

    if (foundUser) {
      bcrypt.compare(mockUser.password, foundUser.password)
        .then(isMatched => {
          if (isMatched === true) {
            jwt.sign(mockUser, 'jsonwebtoken', { expiresIn: '30s' },  (err, token) => {
              if (err) {
                console.log(err);
                return
              }
              console.log(req.user)
              res.send({
                token
              })
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
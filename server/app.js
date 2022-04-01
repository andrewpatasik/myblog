const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const app = express();

const routes = require('./routes/routesIndex');

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

const User = require('./models/User');
passport.use(new JwtStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: 'jsonwebtoken' }, (payload, done) => {
  User.findOne({ username: payload.username }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
}))

app.use(logger('tiny'));
app.use(cors());

app.post('/login', (req, res, next) => {
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
})
app.use('/api', routes.apiRoute);

app.listen(process.env.PORT || 5000, () => console.log('server strarted.'));

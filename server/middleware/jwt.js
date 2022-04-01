const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User');

const jwtStrategy = new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'jsonwebtoken'
}, (payload, done) => {
  User.findOne({
    username: payload.username
  }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
})

module.exports = jwtStrategy;
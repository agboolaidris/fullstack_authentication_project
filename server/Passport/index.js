const passport = require('passport')
const User = require('../Module/AuthModule')
const JWTStrategy = require('./Authorize')
const LoginStrategy = require('./Login')


  passport.use('Login', LoginStrategy)
  passport.use('Authorize', JWTStrategy)

  module.exports = passport

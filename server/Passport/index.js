const passport = require('passport')
const JWTStrategy = require('./Authorize')
const LoginStrategy = require('./Login')


  passport.use('Login', LoginStrategy)
  passport.use('jwt', JWTStrategy)

  module.exports = passport

const passport = require('passport')
const JWTStrategy = require('./Authorize')
const LoginStrategy = require('./Login')
const FacebookStrategy = require('./Facebook')


  passport.use('Login', LoginStrategy)
  passport.use('jwt', JWTStrategy)
  passport.use('Facebook', FacebookStrategy)

  module.exports = passport

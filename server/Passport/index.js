const passport = require('passport')

//import all the strategies

const RegisterStrategy = require('./Register')
const LoginStrategy = require('./Login')
//const google = require('./Google')
//const twitter = require('./Twitter')
//const github = require('./Github')

passport.use('Register',RegisterStrategy)
passport.use('Login', LoginStrategy)
// passport.use('Google',google)
// passport.use('Twitter', twitter)
// passport.use('Github',github)

module.exports = passport

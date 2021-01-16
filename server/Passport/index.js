const passport = require('passport')

//import all the strategies

const register = require('./Register')
const login = require('./Login')
//const google = require('./Google')
//const twitter = require('./Twitter')
//const github = require('./Github')

passport.use('Register',register)
passport.use('Login', login)
// passport.use('Google',google)
// passport.use('Twitter', twitter)
// passport.use('Github',github)

module.exports = passport

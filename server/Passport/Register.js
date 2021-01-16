const Strategy = require('passport-local').Strategy
const User = require('../Module/AuthModule')

const RegisterStrategy = new Strategy(function(username, password , done){
  const usernames = username
})

module.exports = RegisterStrategy
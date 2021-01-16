const express =  require('express')
const Route = express.Router()
const passport = require('../Passport')

//passport.authenticated('register',()=>{})
Route.post('/register',passport.authenticate('Register',{
  successRedirect:'/',
  failureRedirect:'/home',
  session:false
}))

Route.post('/login',passport.authenticate('Login',{
  successRedirect:'/',
  failureRedirect:'/home',
  session:false
}))




module.exports = Route
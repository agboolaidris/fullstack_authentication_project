const express =  require('express')
const Route = express.Router()
const passport = require('../Passport')
const Register = require('../Controller/Register')
const Login = require('../Controller/Login')
const jwt = require('jsonwebtoken')


//register Route
Route.route('/register').post(Register)

//Login Route
Route.route('/login').post(Login)

//logout Route
Route.get('/logout',(req,res)=>{
   res.clearCookie('access-token')
   res.json({user:{username:'',email:''}})
})

//perstitence Route
 Route.get('/authenticated',(req,res)=>{
    const {email, username} = req.user
    res.json({email,username})
})

module.exports = Route
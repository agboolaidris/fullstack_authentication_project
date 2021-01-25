const express =  require('express')
const Route = express.Router()
const passport = require('../Passport')
const Register = require('../Controller/Register')
const Login = require('../Controller/Login')
const jwt = require('jsonwebtoken')


//register Route
Route.route('/register').post(Register)

//Login Route
const signToken = USERID =>{
  return jwt.sign( {iss:'USER ID', sub: USERID},process.env.JWT_SECRET,{expiresIn:'1h'})
 }

Route.route('/login').post(Login)
    

    
    // const token = signToken(_id)

     //.cookie('access_token',token,{ httpOnly:true, sameSite:true} )
     //res.json({user:{email,username}, isAuthenticated:true})


//logout Route
Route.get('/logout',(req,res)=>{
   res.clearCookie('access_token')
   res.json({user:{username:'',email:''}})
})

//perstitence Route
 Route.get('/authenticated',(req,res)=>{
    const {email, username} = req.user
    res.json({email,username})
})

module.exports = Route
const { json } = require('express')
const express =  require('express')
const Route = express.Router()
const passport = require('../Passport')
const Register = require('../Controller/Register')
const jwt = require('jsonwebtoken')


//register Route
Route.route('/register').post(Register)

//Login Route
const signToken = USERID =>{
  return jwt.sign( {iss:'USER ID', sub: USERID},process.env.JWT_SECRET,{expiresIn:'1h'})
 }

Route.post('/login',passport.authenticate('Login',{session:false, failureFlash:true}),(req,res)=>{
    console.log(`falsh ${req.flash}`)
    if(req.isAuthenticated()){
     const {_id, email, username } = req.user;
     const token = signToken(_id)

     res.cookie('access_token',token,{ httpOnly:true, sameSite:true} )
     res.json({user:{email,username}, isAuthenticated:true})
    }
    console.log(` user when error ${req.user}`)
     return res.status(400).json({msg:'nnnn'})

})

//logout Route
Route.get('/logout', passport.authenticate('jwt',{session:false}),(req,res)=>{
   res.clearCookie('access_token')
   res.json({user:{username:'',email:''}})
})

//perstitence Route
 Route.get('/authenticated', passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {email, username} = req.user
    res.json({email,username})
})





module.exports = Route
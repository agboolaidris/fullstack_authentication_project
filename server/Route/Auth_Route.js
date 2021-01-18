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
  return jwt.sign( {iss:'USER ID', sub: USERID},'wale',{expiresIn:'1h'})
 }

Route.post('/login',passport.authenticate('Login',{session:false}),(req,res)=>{
    if(req.isAuthenticated()){
     const {_id, email, username } = req.user;
     const token = signToken(_id)

     res.cookie('access_token',token,{ httpOnly:true, sameSite:true} )
     res.json({user:{email,username}, isAuthenticated:true})
    }
     return res.status(400).json({msg:'nnnn'})

})

//logout Route
Route.get('/logout', passport.authenticate('jwt',{session:false}),(req,res)=>{
  console.log(req.cookies('access_token'))
   res.clearCookie('access_token')
   res.json({user:{username:'',email:''}})
})




module.exports = Route
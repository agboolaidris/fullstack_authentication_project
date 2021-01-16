const { json } = require('express')
const express =  require('express')
const Route = express.Router()
const passport = require('../Passport')

//passport.authenticated('register',()=>{})
Route.post('/register',(req,res)=>{
   passport.authenticate('Register',(error,response,info)=>{
      if(error){
        return res.status(400).json({msg:error})
      }
      return res.json({msg:response})
   })(req,res)
})

Route.post('/login',(req,res)=>{
  passport.authenticate('Login',(error,response,info)=>{
    if(error){
      return res.status(400).json({msg:error})
    }
    return res.json({msg:response})
  })(req,res)
})




module.exports = Route
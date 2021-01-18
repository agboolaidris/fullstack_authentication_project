const { json } = require('express')
const express =  require('express')
const Route = express.Router()
const passport = require('../Passport')
const Register = require('../Controller/Register')

//register Route
Route.route('/register').post(Register)


//Login Route
Route.post('/login',(req,res)=>{
  passport.authenticate('Login',(error,data,info)=>{
    if(error){
      return res.status(400).json({msg:error})
    }
 //persistence login
//     req.logIn(data,(error)=>{
//    if(error){
//        return res.json({msg:error})
//    }
//      return res.json({msg:data})
//  })  

   return res.json({msg:data})

  })(req,res)
})




module.exports = Route
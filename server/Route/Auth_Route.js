const express =  require('express')
const Route = express.Router()
const Register = require('../Controller/Register')
const Login = require('../Controller/Login')
const Authorize = require('../Middleware/Authorize')
const Logout = require('../Controller/Logout')


//register Route
Route.route('/register').post(Register)

//Login Route
Route.route('/login').post(Login)

//logout Route
Route.route('/logout').all(Authorize).get(Logout)
   

//perstitence Route
 Route.get('/authenticated',(req,res)=>{
    const {email, username} = req.user
    res.json({email,username})
})

module.exports = Route
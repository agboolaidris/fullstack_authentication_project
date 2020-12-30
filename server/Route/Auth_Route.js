const express = require('express')
const User = require('../Module/Auth_Module')
const Route = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

Route.get('/',(req,res)=>{
    res.json([{}])
})

Route.post('/register',async(req,res)=>{
  try{
    const {username, email, password, password2} = req.body
    const findEmail = await User.findOne({email:email})
    
    if(!username || !email || !password2 || !password2){
      return  res.status(400).json({msg:'the field is required'}) 
    }
    if(findEmail){
      return  res.status(400).json({msg:'the email address have already exist'})
    }

    const FindUsername = await User.findOne({username:username})
    if(FindUsername){
       return   res.status(400).json({msg:'username has already exist'})
    }
     
    
    if(password.length < 6){
    return res.status(400).json({msg:'password length must be greater than 5 character'})
    }
 
    if( password !== password2){
      return  res.status(400).json({msg:'password does not match'})
    }
    
    const salt= await bcrypt.genSalt()
    const genPassword =await bcrypt.hash(password,salt)
 
    const newUser = new User({
        username:username,
        password:genPassword,
        email:email
    })
 
   await newUser.save()
    .then(async()=>{
        const user = await User.findOne({email:email})
         const token = jwt.sign( {id:user._id},process.env.JWT_SECRET)
         
        res.json({
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email
            }
        })
    })
    .catch((err)=>{
        res.status(400).json({mssg:err})
    })
  }
  catch(err){
      res.status(400).json({msg:err.message})
  }

    
})



module.exports= Route
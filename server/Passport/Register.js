const Strategy = require('passport-local').Strategy
const User = require('../Module/AuthModule')
const bcrypt = require('bcryptjs')

const RegisterStrategy = new Strategy({passReqToCallback:true}, async(req, username,password, done)=>{
  try{ 
    const {username,password,email,password2} = req.body;
    
    if(!email || !password || !username || !password2){
     return done('the field is required',null)
    }
     const user_Email = await User.findOne({email})
     if(user_Email){
       return done('account with this email address has been register')
     }

     const user_Username = await User.findOne({username})
     if(user_Username){
        return done('username have already exist')
     }

     if(password.length < 6){
      return done('password most be greater than six')
    }
   
     if(password !== password2){
       return done('password doesnot match')
     }

     const salt = await bcrypt.genSalt()
     const genpassword = await bcrypt.hash(password,salt)

     const user = new User({
       email:email,
       password:genpassword,
       username:username
     })
     console.log(user)

    await user.save()
     .then((res)=>{
       const response = {
         id:res._id,
         username:res.username,
         email:res.email
       }
      done(null,response)
     })
     .catch((err)=>{
       done(err)
     })

    

    }
   catch (err){
    done(err.message)
   } 
})

module.exports = RegisterStrategy
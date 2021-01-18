const passport = require('passport')
const User = require('../Module/AuthModule')

//serialization and deserialization
// passport.serializeUser((user,done)=>{
//    console.log(user)
//     done(null,user._id)
    
//   })

//   passport.deserializeUser(async(id,done)=>{
// try {
//     console.log(id)
//    await User.findOne({_id:id})
//   .then(res=>{
//       done(null,res)
//     })    .catch(err=>{
//        done(err)
//    })
//   } 
//    catch(err){
//      done(err.message)
//   }
//  })


//import all the strategies

const RegisterStrategy = require('./Register')
const LoginStrategy = require('./Login')
//const google = require('./Google')
//const twitter = require('./Twitter')
//const github = require('./Github')

passport.use('Register',RegisterStrategy)
passport.use('Login', LoginStrategy)
// passport.use('Google',google)
// passport.use('Twitter', twitter)
// passport.use('Github',github)

module.exports = passport

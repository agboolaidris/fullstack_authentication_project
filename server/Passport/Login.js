const Strategy = require('passport-local').Strategy
const User = require('../Module/AuthModule')
const bcrypt = require ('bcryptjs')

const LoginStrategy = new Strategy({usernameField:'email'},async(email, password , done)=>{
   try{ 
       if( !email || !password){
           return done('the field is required', null)
          }
        const user= await User.findOne({email:email}) 
        if(!user){
            return done('no user found')
        }
        const compare_password = await bcrypt.compare(password,user.password)
        if(!compare_password){
            return done('email or password is invalid')
        }

        return done(null, user)

    } 
    
    catch(err){
        return done(err,null)
    }
})

module.exports = LoginStrategy
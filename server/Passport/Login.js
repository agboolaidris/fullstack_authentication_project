const Strategy = require('passport-local').Strategy
const User = require('../Module/AuthModule')
const bcrypt = require ('bcryptjs')

const LoginStrategy = new Strategy({usernameField:'email'},async(email, password , done)=>{
     
    try{ 
       if( !email || !password){
           return done(null, false,{msg:'the field is reguired'})
          }
        const user= await User.findOne({email:email}) 
        if(!user){
            return done(null,false,{msg:'user is not exist'})
        }
        const compare_password = await bcrypt.compare(password,user.password)
        if(!compare_password){
            return done(null, false, {msg:'email or password is invalid'})
        }

        return done(null, user)

    } 
    
    catch(err){
        return done(err,null)
    }
})

module.exports = LoginStrategy
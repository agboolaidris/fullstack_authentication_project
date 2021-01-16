const Strategy = require('passport-local').Strategy

const LoginStrategy = new Strategy({usernameField:'email'},(email, password , done)=>{
    console.log(password)
    if(!email || !password){
        return done('the field is required')
    }
    
   return done(null,'is true')
})

module.exports = LoginStrategy
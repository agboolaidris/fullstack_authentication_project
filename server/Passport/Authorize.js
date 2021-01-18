const JwtPassport = require('passport-jwt').Strategy;
const User = require('../Module/AuthModule')

const cookieExtractor = (req)=>{
  let token = null
  if(req && req.cookies){
      token = req.cookies['access_token']
    }
  return token
}

const JWTStrategy = new JwtPassport(
    {
      secretOrKey:process.env.JWT_SECRET,
      jwtFromRequest:cookieExtractor
     },
      async(payload, done)=>{
        try {
          await User.findById(payload.sub)
            .then(res=>{
                if(res){
                return done(null,res)
                }
                else {
                return done(null,false)  
                }

            })
            .catch(err=>{
                console.log(err)
               return done(err,false)
            })

         }
         catch(err){
              done(err,false)
         }

      })

 module.exports = JWTStrategy     
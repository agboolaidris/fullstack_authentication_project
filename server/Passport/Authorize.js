const JwtPassport = require('passport-jwt').Strategy;

const JWTStrategy = new JwtPassport(
    {
      secretOrKey:process.env.JWT_SECRET,
      jwtFromRequest:cookieExtractor },
      ()=>{})

 module.exports = JWTStrategy     
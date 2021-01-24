const Strategy = require('passport-facebook').Strategy;
const chalk = require('chalk')

const FacebookStrategy = new Strategy({
    clientID:process.env.FACEBOOK_ID,
    clientSecret:process.env.FACEBOOK_SECRET,
    profileFields:['id','email','photos','displayName'],
    callbackURL:'/user/auth/callback'
},(accessToken, refreshToken, profile, done)=>{
     const {emails, photos, displayName, id} = profile
     console.log(id)
    done(null, profile)
})


module.exports = FacebookStrategy
const Strategy = require('passport-facebook').Strategy;
const chalk = require('chalk')

const FacebookStrategy = new Strategy({
    clientID:process.env.FACEBOOK_ID,
    clientSecret:process.env.FACEBOOK_SECRET,
    callbackURL:'/user/auth/callback'
},(accessToken, refreshToken, profile, done)=>{
    console.log(chalk.blue(JSON.stringify(profile)))
    done(null, profile)
})


module.exports = FacebookStrategy
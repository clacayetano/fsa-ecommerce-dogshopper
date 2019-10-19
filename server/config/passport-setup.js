const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'api/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('passport callback!')
        console.log({accessToken, refreshToken, profile, done})
    })
)
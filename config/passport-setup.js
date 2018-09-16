const passport = require('passport')
//const keys = require('./keys')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../model/userModel.js')


passport.use(new GoogleStrategy({
    clientID : "402027701818-1hmbsn7o39sp1jttb5e07ltne2j24hen.apps.googleusercontent.com",
    clientSecret : "_FYzg6U5HffELnpIN5CHdPzv",
    callbackURL : "/auth/google/redirect"

},(accessToken, refreshToken, profile, done)=>{
    new User({
        username : profile.displayName,
        googleId : profile.id
    }).save().then((newUser)=>{
        console.log(newUser)
    })
}))


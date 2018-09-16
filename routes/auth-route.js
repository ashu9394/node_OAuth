const router = require('express').Router()
const passport = require('passport')

//Auth Login Routes
router.get('/login',(req,res)=>{
    res.render('login')
})

//Log Out 
router.get('/logout',(req,res)=>{
    //Handle Logging out
    res.send('Logging out')
})


//Login With Google 
router.get('/google',passport.authenticate('google',{
    scope : ['profile']
}))



//Redirect after login
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send("Callback Url")
})

module.exports = router
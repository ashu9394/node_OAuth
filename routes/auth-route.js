const router = require('express').Router()

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
router.get('/google',(req,res)=>{
    //handle login with google
    res.send('Logging with google')
})


module.exports = router
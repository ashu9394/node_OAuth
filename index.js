//Dependencies
const express = require('express')
const loginRoutes = require('./routes/auth-route')


//Application Variables
const applicationPort = process.env.Port || 3000
const app = express();
app.set('view engine','ejs')

//Appending auth in front of all login routes
app.use('/auth',loginRoutes)


//Routes
app.get('/home',(req,res)=>{
    res.render('home')
})

app.listen(applicationPort)
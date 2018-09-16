//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const loginRoutes = require('./routes/auth-route')
const passportStrategy = require('./config/passport-setup')


//Application Variables
const applicationPort = process.env.Port || 3000
const app = express();
app.set('view engine','ejs')

//Connecting to mongoose
mongoose.connect('mongodb://ashu:Test123@ds235352.mlab.com:35352/node_oauth',()=>{
    console.log("db connected")
})

//Appending auth in front of all login routes
app.use('/auth',loginRoutes)


//Routes
app.get('/home',(req,res)=>{
    res.render('home')
})

app.listen(applicationPort)
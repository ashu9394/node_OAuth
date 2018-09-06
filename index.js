//Dependencies
const express = require('express')

//Application Variables
const applicationPort = process.env.Port || 3000
const app = express();
app.set('view engine','ejs')



//Routes
app.get('/home',(req,res)=>{
    res.render('home')
})

app.listen(applicationPort)
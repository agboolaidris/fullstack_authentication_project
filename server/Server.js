const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieparser = require('cookie-parser')
require('dotenv').config()
const passport = require('./Passport')

//init mongoose
mongoose.connect('mongodb://localhost:27017/authentication',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.once('open',()=>{
   console.log('connected successful...........')
})
.on('error',()=>{
    console.log('error occur during the connection to database')
})

// init express
const app = express()
//cross origin resource sharing
app.use(cors())

//cokieparser
app.use(cookieparser())


 
//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))



//init passportjs
app.use(passport.initialize())
//app.use(passport.session())

//router
app.use('/user', require('./Route/Auth_Route'))
app.use('/post',require('./Route/Post_Route'))


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { json, urlencoded } = require('express')
require('dotenv').config()

mongoose.connect('mongodb+srv://Iristech:nQrfzZE1y9dqKzF1@users.eols5.mongodb.net/datastorage?retryWrites=true&w=majority',{useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log('connect to database')
})

//express init
const app = express()
app.use(cors())

//body parser
app.use(json())
app.use(urlencoded({extended:false}))

//route

app.use('/user',require('./Route/Auth_Route'))

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
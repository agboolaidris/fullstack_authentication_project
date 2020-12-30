const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { json, urlencoded } = require('express')
require('dotenv').config()

mongoose.connect('mongodb://localhost:27017/datastorage',{useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log('connect to database')
})

//express init
const app = express()
app.use(cors())

//body parser
app.use(json())
app.use(urlencoded({extended:false}))

//route



const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
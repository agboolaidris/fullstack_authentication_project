const express = require('express')
const User = require('../Module/Auth_Module')
const Route = express.Router()

Route.get('/',(req,res)=>{
    res.json([{}])
})



module.exports= Route
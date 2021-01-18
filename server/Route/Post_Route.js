const Route = require('express').Router()
const passport = require('../Passport/index')
const AddPost = require('../Controller/addPost') 


Route.route('/add').all(passport.authenticate('jwt',{session:false})).post(AddPost)


module.exports = Route
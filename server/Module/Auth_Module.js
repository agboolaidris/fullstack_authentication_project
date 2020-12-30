const mongoose = require('mongoose')
const schema = mongoose.Schema


new_schema = new schema({
    username:{unique:true, minlength:6, required:true, type:String},
    email:{unique:true, required:true, type:String},
    password:{ minlength:6,  required:true, type:String}
})

const User =mongoose.model('User',new_schema)

module.exports = User
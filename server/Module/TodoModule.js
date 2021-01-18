const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post =  new Schema({
    username:{required:true, type:String},
    title:{required:true, type:String},
    body:{required:true, type:String}
})

const Article = mongoose.model('Article', Post)

module.exports = Article
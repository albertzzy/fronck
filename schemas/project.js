const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const project = new Schema({
    name:{type:String},
    createTime:{type:Date,default:new Date()},
    author:{type:String},
    group:{type:Array,default:[]}       
})

// middlewares


module.exports = project;
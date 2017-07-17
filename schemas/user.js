const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mixed = Schema.Types.mixed;

const user = new Schema({
    name:{type:String},
    groups:{type:Array,default:[]},
    projects:{type:Array,default:[]},
    password:{type:String},
    email:{type:String}    
})

// middlewares

module.exports = user;
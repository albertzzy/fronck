const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const project = new Schema({
    name:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now
    },
    author:{
        type:String
    },
    group:{
        type:Array,
        default:[]
    },
    apilist:{
        type:Schema.Types.ObjectId,
        ref:'Api'
    }       
})

// middlewares


module.exports = project;
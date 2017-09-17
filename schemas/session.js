const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    sid:{
        type:String,
        unique:true
    },
    expires:{
        type:Number
    },
    session:{
        type:String
    }
});



module.exports = SessionSchema;
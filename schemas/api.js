const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mixed = Schema.Types.mixed;

const api = new Schema({
    name:{type:String},
    method:{type:String},
    url:{type:String},
    params:{type:Mixed},
    response:{type:Mixed},
    author:{type:String}
})

// middlewares


module.exports = api;
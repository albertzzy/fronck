const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mixed = Schema.Types.Mixed;

const api = new Schema({
    method:{
        type:String
    },
    url:{
        type:String
    },
    params:{
        type:Mixed
    },
    response:{
        type:Mixed
    },
    error:{
        type:Mixed
    },
    author:{
        type:String
    }
})

// middlewares


module.exports = api;
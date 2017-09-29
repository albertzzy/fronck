const mongoose = require('mongoose');
const apiSchema = require('../schemas/api');

const Api = mongoose.model('Api',apiSchema);

module.exports = Api;





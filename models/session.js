const mongoose = require('mongoose')
const SessionSchema = require('../schemas/session')

const SessionModel = mongoose.model('SessionModel',SessionSchema);

module.exports = SessionModel;


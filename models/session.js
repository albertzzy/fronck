const SessionSchema = require('../schemas/session')
const mongoose = require('mongoose')

const SessionModel = mongoose.model('SessionModel',SessionSchema);

module.exports = SessionModel;


var mongoose = require('mongoose')

var schema = mongoose.Schema({
    name: String,
    chatID: String,
    stocks: [String],
    topics: [String],
    createdOn: { type: Date, default: Date.now },
});

var User = mongoose.model('User', schema);
module.exports = User;


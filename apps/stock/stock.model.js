var mongoose = require('mongoose')


var schema = mongoose.Schema({
    company: String,
    code: String,
    current: Number,
    values: [{
        date: { type: Date, default: Date.now },
        value: Number
    }],
    createdOn: { type: Date, default: Date.now },
});


var Stock = mongoose.model('Stock', schema);
module.exports = Stock;


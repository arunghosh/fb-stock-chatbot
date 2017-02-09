var mongoose = require('mongoose')


var schema = mongoose.Schema({
    company: String,
    code: String,
    // Current value of the share
    current: Number,
    prevClose: Number,
    // Change from the prev close
    change: Number,
    changePercent: Number,
    values: [{
        date: { type: Date, default: Date.now },
        value: Number
    }],
    createdOn: { type: Date, default: Date.now },
});


var Stock = mongoose.model('Stock', schema);
module.exports = Stock;


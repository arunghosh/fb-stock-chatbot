var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var db;

// Connect to mongoDB
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db_inst) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db = db_inst;
});

module.exports = db;



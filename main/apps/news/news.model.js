var mongoose = require('mongoose')

var newsSchema = mongoose.Schema({
  title: String,
  summary: String,
  keywords: [String],
  url: String,
  image: String,
  isNotified: {
    default: false,
    type: Boolean
  },
  date: { type: Date, default: Date.now },
  createdOn: { type: Date, default: Date.now },
}) 


var News = mongoose.model('News', newsSchema);
module.exports = News;

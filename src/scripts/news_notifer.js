const News = require('../apps/news/news.model');
const url = 'mongodb://localhost:27017/stock';
const mongoose = require('mongoose');
const notifier = require('../components/notifier')
console.log(123123)
mongoose.connect(url, {});
mongoose.connection.on('error', function(err) {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1); // eslint-disable-line no-process-exit
});


function notify(callback) {
  News.findOne({
    isNotified: false
  }, function(err, result) {
    if (err) {
      console.log(err);
      return callback(err);
    } 
    console.log(result);
    notifier.sendNewsToUsers(result, () => {
      console.log('done')
      News.findByIdAndUpdate(result._id, {$set:{
        isNotified: true
      }}, function(err) {
        console.log(err)
        process.exit(0)
      })
    })
  });
}

notify(() => {});


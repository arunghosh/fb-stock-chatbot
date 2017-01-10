var News = require('./news.model');

module.exports = {
    get: get,
    add: add,
    getLatest: getLatest
}

function get(req, res) {
    getLatest(() => {});
    return res.send("hello");
}


function getLatest(callback) {
    News.find({}, (err, articles) => {
        callback(err, articles[0]);
    });
}


function add(req, res) {
    console.log(req.body);
    News.find({url: req.body.url}, function(err, articles) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }

        if(articles && articles.length) return res.send("News already added");

        var news = new News({
            title: req.body.title,
            summary: req.body.summary,
            keywords: req.body.keywords,
            url: req.body.url,
            image: req.body.image,
        });

        news.save(function(err){
            if(err) return res.status(400).send(err);
            return res.send("Successfully added news");
        });
    });
}

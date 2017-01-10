var News = require('./news.model');

module.exports = {
    get: get,
    add: add
}

function get(req, res) {
    return res.send("hello");
}


function add(req, res) {
    console.log(req.body);
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
}

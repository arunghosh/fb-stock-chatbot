var Stock = require('./stock.model')
var notifier = require('../../components/notifier');

module.exports = {
    addOrUpdate: addOrUpdate,
}

function addOrUpdate(req, res) {
    console.log('Adding/updating stock...')
    var currentValue = Number(req.body.value.replace(/,/g, ''))
    Stock.findOne({code: req.body.code}, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }

        if(result) {
            update(s => {
                //notify the users
                notifier.sendStockToUsers(s);
            });
        } else {
            add();
        }


    });
    // Add stock
    function add() {
        var stock = new Stock({
            company: req.body.name,
            code: req.body.code,
            current: currentValue,
            values: [{
                value: currentValue
            }]
        });

        stock.save(function(err, updated){
            if(err) {
                console.log(err);
                return res.status(400).send(err);
            }
            // notifier.sendNewsToUsers(updatedNews, () => {});
            return res.send("Successfully added stock");
        });

    }

    // Add new values and update current value of the stock
    function update(callback) {
        Stock.findOneAndUpdate(
            {
                code: req.body.code
            }, {
                current: currentValue,
                $push: {
                    values: {
                        value: currentValue
                    }
                } 
            }, {
                new: true
            }, function(err, updated){
                if(err) {
                    console.log(err);
                    return res.status(400).send(err);
                }
                callback(updated);
                return res.send("Successfully updated stock");
            }
        )
    }
}

const User = require('./user.model');

module.exports = {
  get: get,
  update: update
}


function get(req, res) {
  console.log(req.params)
  User.findById(req.params.id, (err, result) => {
    if(err) {
      console.log(err);
      return res.status(400).send(err);
    }
    res.send(result);
  })
}

function update(req, res) {

}
